import { useState } from 'react';
import axios from 'axios';

export default function SignUp() {

    const [userRegister, setUserRegister] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
    });


    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleChange = (e) => {

        console.log('prueba')
        setUserRegister({
            ...userRegister,
            [e.target.name]: e.target.value,
        })

    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://51.38.51.187:5050/api/v1/auth/sign-up', { ...userRegister })
            setSuccessMessage("Se ha registrado correctamente")
            console.log(response.data)
            setTimeout(() => {
                window.location.reload();
            }, 2000)

        } catch (error) {
            setErrorMessage("Se ha producido un error en la operación")
            setTimeout(() => {
                window.location.href = "/"
            }, 2000)
        }
    };
    return (
        <div className='page'>

            <header className="title">
                <h3>REGISTRATE</h3>
            </header>

            <div className='subSection'>
                <article className='aside'>
                    <form onSubmit={handleSubmit} className="col-auto">
                        <div>
                            <aside className='w-100'>
                                <div>
                                    <label className="form-label">Nombre</label>
                                    <input type="text" name="name" className="form-control" id="validationDefault01" onChange={handleChange}
                                        placeholder="Introduce Tu Nombre" required />
                                </div>
                                <div>
                                    <label className="form-label">Apellido</label>
                                    <input type="text" name="surname" className="form-control" id="validationDefault02" onChange={handleChange}
                                        placeholder="Introduce tu Apellido" required />
                                </div>
                                <div>
                                    <label className="form-label">Email</label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                        <input type="email" name="email" className="form-control" id="validationDefaultUsername"
                                            aria-describedby="inputGroupPrepend2" onChange={handleChange} placeholder="Introduce Tu Email" required />
                                    </div>
                                </div>
                                <div>
                                    <label className="form-label">Password</label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="inputGroupPrepend2">***</span>
                                        <input type="password" name="password" className="form-control" id="validationDefaultPassword"
                                            aria-describedby="inputGroupPrepend2" onChange={handleChange} placeholder="Escribe Un Password" required />
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </form >
                </article>
            </div>
            <aside className='subSection m-5'>
                <div className="shadow-lg m-3 p-3 bg-body rounded border" style={{ display: successMessage ? "block" : "none" }}>
                    <div>
                        {successMessage}
                    </div>
                </div>
                <div className="shadow-lg m-3 p-3 bg-body rounded border" style={{ display: errorMessage ? "block" : "none" }}>
                    <div>
                        {errorMessage}
                    </div>
                </div>
            </aside>
            <aside className='subSection'>
                <div className="btn-group group-button">
                    <button className="btn btn-outline-light btnCenter btnStyle" type="submit" onClick={handleSubmit} disabled={!userRegister.name.length || !userRegister.surname.length ||
                        !userRegister.email.length || !userRegister.password.length}>Registrarse</button>
                </div>
            </aside>
        </div >
    )

};
