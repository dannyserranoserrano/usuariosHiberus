import React from 'react'
import { Link } from 'react-router-dom'

function LogOut() {

    let option = window.confirm("Estas seguro de querer Salir?")
    if (option) {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("email")
    }

    return (
        <div className='logout'>
            <div className=" bodyLogout">
                <header className='centerLogout'>
                    <div className=" text-center"><p>Sessión Cerrada Correctamente</p></div>
                </header>
                {/* *****Buttons***** */}
                <div className="container group-button">
                    <div>
                        <div className="col-auto">
                            <Link className="btn btn-primary" type="button" to="/">Volver</Link>
                        </div>
                        <div className="col-auto">
                            <Link className="btn btn-success" type="button" to="/login">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogOut