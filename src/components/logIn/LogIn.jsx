import { useState } from "react";
import axios from "axios";

export default function LogIn() {
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    });


    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

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
                window.location.reload();
            }, 1000)


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
                <h3>LOGUEATE</h3>
            </header>

            <div className="subSection">
                <article className="aside">
                    <form onSubmit={handleSubmit} className="col-auto">
                        <aside className="w-100">
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
                    </form>
                </article>
            </div>

            <aside className="subSection m-5">
                <div className="shadow-lg m-3 p-3 bg-body rounded border" style={{ display: successMessage ? "block" : "none" }}>
                    {successMessage}
                </div>
                <div className="shadow-lg m-3 p-3 bg-body rounded border" style={{ display: errorMessage ? "block" : "none" }}>
                    {errorMessage}
                </div>
            </aside>

            <aside className="subSection">
                <article className="group-button">
                    <div className="btn-group ">
                        <button className="btn btn-outline-light btnStyle" onClick={handleSubmit} type="submit" onChange={handleChange}
                            disabled={!userLogin.email.length || !userLogin.password.length}>Login</button>
                    </div>
                </article>
            </aside>
        </div>
    )
};

