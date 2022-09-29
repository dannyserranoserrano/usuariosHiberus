import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const LogIn = () => {
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    });


    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://51.38.51.187:5050/api/v1/auth/log-in", { ...userLogin })

            localStorage.setItem("accessToken", response.data.accessToken)
            localStorage.setItem("email", userLogin.email)

            console.log(response.data)
            console.log(response)
            setSuccessMessage("Se ha Logueado correctamente")
            setTimeout(() => {
                navigate('/userPage')
            }, 2000)

        } catch (error) {
            setErrorMessage("Se ha producido un error en la operación")
            setTimeout(() => {
                window.location.href = "/logIn"
            }, 2000)
        }
    };

    return (
        <div className='login'>
            <div className="container">
                <div className="loginTitle text-center mt-3"><p>LOGUEATE</p></div>
                <form onSubmit={handleSubmit} className="col-auto">
                    <div className='row justify-content-around'>
                        <div className='container'>
                            <div className="table table-responsive">
                                <div className='container inputsRegister'>
                                    <div className="loginEmail">
                                        <label className="form-label">Email</label>
                                        <div className="input-group">
                                            <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                            <input type="email" name="email" className="form-control" id="validationDefaultUsername"
                                                aria-describedby="inputGroupPrepend2" onChange={handleChange} placeholder="Introduce Tu Email" required />
                                        </div>
                                    </div>
                                    <div className="loginPassword">
                                        <label className="form-label">Password</label>
                                        <div className="input-group">
                                            <span className="input-group-text" id="inputGroupPrepend2">***</span>
                                            <input type="password" name="password" className="form-control" id="validationDefaultPassword"
                                                aria-describedby="inputGroupPrepend2" onChange={handleChange} placeholder="Escribe Un Password" required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* *****AVISOS DE ERRORES***** */}
                            <div className="message_ok shadow-lg m-3 p-3 bg-body rounded border" style={{ display: successMessage ? "block" : "none" }}>
                                {successMessage}
                            </div>
                            <div className="message_nok shadow-lg m-3 p-3  bg-body rounded border" style={{ display: errorMessage ? "block" : "none" }}>
                                {errorMessage}
                            </div>

                            {/* *****Buttons***** */}
                            <div className="container loginButtons">
                                <div className=' row justify-content-between '>
                                    <div className="col-auto">
                                        <Link className="btn btn-primary" type="button" to="/">Volver</Link>
                                    </div>
                                    <div className="col-auto">
                                        <button className="btn btn-success" type="submit" onChange={handleChange}
                                            disabled={!userLogin.email.length || !userLogin.password.length}>Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )

};
export default LogIn;
