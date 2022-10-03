import React from 'react'
import { useNavigate } from 'react-router-dom'
function LogOut() {

    const navigate = useNavigate();

    let option = window.confirm("Estas seguro de querer Salir?")

    if (option) {
        localStorage.removeItem(["accessToken"]);
        localStorage.removeItem(["email"]);

        setTimeout(() => {
            navigate('/')
        }, 3000)
    } else {
        setTimeout(() => {
            navigate('/')
        }, 3000)
    }

    return (
        <div className='page'>
            <header className='title'>
                <div className="title"><p>Session Cerrada Correctamente</p></div>
            </header>
            <section className="section">
                <div className='subSection'>
                </div>
            </section>

        </div>
    )
}

export default LogOut