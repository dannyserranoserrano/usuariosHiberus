import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../use'


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
                setErrorMessage("Se ha producido un error en la operación")
                setTimeout(() => {
                    window.location.href = `/user/${id}`
                }, 2000)
            }
        };
    }

    //Funciones para actualizar el usuario

    function modifyForm() {
        let formulario = document.getElementById("formMod").style.display = 'block';
        let modButton = document.getElementById("modButton").style.display = 'none';
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
                setSuccessMessage("Se ha actualizado correctamente")
                setTimeout(() => {
                    window.location.href = `/user/${id}`
                }, 2000)

            } catch (error) {
                setErrorMessage("Se ha producido un error en la operación")
                setTimeout(() => {
                    window.location.href = "/userPage"
                }, 2000)
            }
        }
    }


    return (
        <div className='user'>
            <header>
                <h1>Datos de {user.name}</h1>
                <aside>
                    <Link className="btn btn-primary" type="button" to="/userPage">Volver</Link>
                    <Link className="btn btn-primary" type='button' to="/">Home</Link>
                </aside>
            </header>

            <section>

                <div className="">
                    <div className="headUser"><strong>Nombre:</strong> {user.name}</div>
                    <div className="headUser"><strong>Apellido:</strong> {user.surname}</div>
                    <div className="headUser"><strong>Email:</strong> {user.email}</div>
                    <div className="headUser"><strong>Id:</strong> {user.id}</div>
                </div>


                <div id='formMod' style={{ display: 'none' }}>
                    <form onSubmit={handleSubmit} className="col-auto">
                        <div className="">
                            <div className='container inputsUpUser w-100'>
                                <div className='upUserName'>
                                    <label className="form-label">Nombre</label>
                                    <input type="text" name="name" value={upUser.name} className="form-control" onChange={handleChange}
                                        placeholder={user.name} required />
                                </div>
                                <div className='upUserSurname'>
                                    <label className="form-label">Apellido</label>
                                    <input type="text" name="surname" value={upUser.surname} className="form-control" onChange={handleChange}
                                        placeholder={user.surname} required />
                                </div>
                                <div className='upUserSurname'>
                                    <label className="form-label">Email</label>
                                    <input type="email" name="email" value={upUser.email} className="form-control" onChange={handleChange}
                                        placeholder={user.email} required />
                                </div>
                            </div>

                            <div className="message_ok shadow-lg p-3 m-3 bg-body rounded border" style={{ display: successMessage ? "block" : "none" }}>
                                <div>
                                    {successMessage}
                                </div>
                            </div>
                            <div className="message_ok shadow-lg p-3 m-3 bg-body rounded border" style={{ display: errorMessage ? "block" : "none" }}>
                                <div>
                                    {errorMessage}
                                </div>
                            </div>


                            <div className="container updateButtonsUserAdmin">
                                <div className=" row justify-content-between">
                                    <div className='col-auto'>
                                        <button className="btn btn-warning" type="submit"
                                            disabled={!upUser.name.length || !upUser.surname.length || !upUser.email.length}
                                        >Modificar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form >
                </div>
                <div id="modButton" className='group-button'>
                    <button className='btn btn-danger' onClick={delUser}>Borrar</button>
                    <button className='btn btn-warning' onClick={modifyForm}>Modificar</button>
                </div>
            </section>
        </div>
    )
}

export default User