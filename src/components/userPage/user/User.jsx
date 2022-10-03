import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../userPage.css'


function User() {

    const { id } = useParams()
    const [user, setUser] = useState([]);
    const [upUser, setUpUser] = useState({
        email: "",
        name: "",
        surname: ""
    });
    const accessToken = localStorage.getItem("accessToken")
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const config = {
        headers: { Authorization: `Bearer ${accessToken}` }
    }

    //Cargamos los datos del usuario
    useEffect(() => {
        const getUser = async () => {
            const response = await axios.get(`http://51.38.51.187:5050/api/v1/users/${id} `,
                config)
            console.log(response.data);
            setUser(response.data);
        }
        getUser();

    }, []);

    //Funcion para borrar el usuario
    const delUser = async (e) => {
        e.preventDefault();

        let option = window.confirm("Seguro de borrar al Usuario?")
        if (option) {

            const response = await axios.delete(`http://51.38.51.187:5050/api/v1/users/${id}`,
                config)
            console.log(response);

            try {
                setSuccessMessage('El Usuario ha sido eliminado')

                setTimeout(() => {
                    window.location.href = '/userPage'
                }, 2000)

            } catch (error) {

                setTimeout(() => {
                    window.location.href = `/user/${id}`
                }, 2000)
            }
        };
    }

    //Funciones para actualizar el usuario

    function modifyForm() {
        document.getElementById("formMod").style.display = 'flex';
        document.getElementById("buttonMod").style.display = 'flex';
        document.getElementById("modButton").style.display = 'none';
    }
    function close() {
        document.getElementById("formMod").style.display = 'none';
        document.getElementById("buttonMod").style.display = 'none';
        document.getElementById("modButton").style.display = 'flex';
    }


    const handleChange = (e) => {
        setUpUser({
            ...upUser,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let option = window.confirm('Seguro de modificar el usuario?')

        if (option) {
            try {
                const response = await axios.put(`http://51.38.51.187:5050/api/v1/users/${id}`,
                    { ...upUser },
                    config)

                setSuccessMessage(response.statusText)
                console.log(response)
                setTimeout(() => {
                    window.location.href = `/user/${id}`
                }, 2000)

            } catch (error) {
                setErrorMessage(error.message)
                console.log(error.message)
                setTimeout(() => {
                    window.location.href = "/userPage"
                }, 2000)
            }
        }
    }


    return (
        <div className='page'>
            <header className='title'>
                <p>Datos de {user.name}</p>
            </header>

            <section className='section'>
                <div className='subSection'>
                    <article className='aside'>
                        <div className="card text-center">
                            <div className='card-body'>
                                <h5 className="headUser"><strong>Nombre:</strong> {user.name}</h5>
                                <p className="headUser"><strong>Apellido:</strong> {user.surname}</p>
                                <p className="headUser"><strong>Email:</strong>{user.email}</p>
                                <p className="headUser"><strong>Id:</strong><i>{user.id}</i></p>
                            </div>
                        </div>
                    </article>

                    <article id='formMod' className='aside' style={{ display: 'none' }} >
                        <form onSubmit={handleSubmit} className="col-auto">
                            <aside className=' w-100'>
                                <div>
                                    <label className="form-label">Nombre</label>
                                    <input type="text" name="name" value={upUser.name} className="form-control" onChange={handleChange}
                                        placeholder={user.name} required />
                                </div>
                                <div>
                                    <label className="form-label">Apellido</label>

                                    <input type="text" name="surname" value={upUser.surname} className="form-control" onChange={handleChange}
                                        placeholder={user.surname} required />
                                </div>

                                <div>
                                    <label className="form-label">Email</label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                        <input type="email" name="email" value={upUser.email} className="form-control" onChange={handleChange}
                                            placeholder={user.email} required />
                                    </div>
                                </div>
                            </aside>
                        </form >
                    </article>
                </div>
                <div className="subSection">
                    <article>
                        <div className="shadow-lg bg-body rounded border text-center" style={{ display: successMessage ? "block" : "none" }}>
                            {successMessage}
                        </div>
                        <div className="shadow-lg bg-body rounded border  text-center" style={{ display: errorMessage ? "block" : "none" }}>
                            {errorMessage}
                        </div>
                    </article>
                    <article className='group-button'>
                        <div id='buttonMod' className="btn-group " style={{ display: 'none' }} >
                            <button className="btn btn-outline-warning" type="submit" onClick={handleSubmit} disabled={!upUser.name.length || !upUser.surname.length || !upUser.email.length}
                            >Modificar</button>
                            <button className="btn btn-outline-success" onClick={close}>Cerrar</button>
                        </div>
                        <div id="modButton" className='btn-group'>
                            <button className='btn btn-outline-danger' onClick={delUser}>Borrar</button>
                            <button className='btn btn-outline-warning' onClick={modifyForm}>Editar</button>
                            <Link className="btn btn-outline-success" type="button" to="/userPage">Volver</Link>
                        </div>
                    </article>
                </div>
            </section>
        </div >
    )
};

export default User