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
            <div className="container bodyLogout">
                <div className='centerLogout'>
                    <div className="logoutTitle text-center"><p>Sesión Cerrada Correctamente</p></div>
                </div>
                {/* *****Buttons***** */}
                <div className="container buttonsLogout">
                    <div className=' row justify-content-between'>
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