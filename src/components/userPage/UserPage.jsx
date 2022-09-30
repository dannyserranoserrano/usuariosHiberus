import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

const UserPage = () => {

    const [users, setUsers] = useState([]);
    const accessToken = localStorage.getItem("accessToken")
    const config = {
        headers: { Authorization: `Bearer ${accessToken}` }
    }

    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get("http://51.38.51.187:5050/api/v1/users",
                config)
            // console.log(response.data.items);
            setUsers(response.data.items);
        }
        getUsers();
    }, []);

    return (
        <div>
            <header>
                <h1>Lista de Usuarios</h1>
                <aside>
                    <Link className="btn btn-primary" type="button" to="/">Volver</Link>
                    <Link className="btn btn-primary" type='button' to="/LogOut">LogOut</Link>
                </aside>
            </header>

            <section>
                <table className='table table-striped table-dark '>
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
                            <tr key={e._id}>
                                <td>{e.email}</td>
                                <td>{e.name}</td>
                                <td>{e.surname}</td>
                                <td><Link type="button" className="btn btn-primary" to={`/user/${e.id}`}>Ver</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>


            </section>
        </div>
    )
}

export default UserPage