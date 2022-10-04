import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import './userPage.css'

const UserPage = () => {

    const [users, setUsers] = useState([]);
    const accessToken = localStorage.getItem("accessToken")
    const [errorMessage, setErrorMessage] = useState(null);

    const config = {
        headers: { Authorization: `Bearer ${accessToken}` }
    }

    useEffect(() => {

        try {
            const getUsers = async () => {
                const response = await axios.get("http://51.38.51.187:5050/api/v1/users",
                    config)
                console.log(response);
                setUsers(response.data.items);
            }
            getUsers();
        } catch (error) {
            setErrorMessage("Se ha producido un error en la operación")
        }

    }, []);

    return (
        <div className='page' >
            <header className='title'>
                <h3>Lista de Usuarios</h3>
            </header>

            <section>
                <article className='tabla'>
                    <table className=' w-100 table table-sm table-striped table-dark'>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody>
                            {users.map(e => (
                                <tr data-toggle="collapse"
                                    data-target=".multi-collapse1"
                                    aria-controls="multiCollapseExample1" key={e._id}>
                                    <td data-titulo="Usuario:">{e.email}</td>
                                    <td data-titulo="Nombre:">{e.name}</td>
                                    <td data-titulo="Apellido:">{e.surname}</td>
                                    <td className='d-flex justify-content-center'><Link type="button" className="btn btn-outline-light btnStyle" to={`/${e.id}`}>Ver</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </article>

                <aside className='subSection'>
                    <div className="aside shadow-lg m-3 p-3 bg-body rounded border" style={{ display: errorMessage ? "block" : "none" }}>
                        <div>
                            {errorMessage}
                        </div>
                    </div>
                </aside>
            </section>
        </div>
    )
}

export default UserPage