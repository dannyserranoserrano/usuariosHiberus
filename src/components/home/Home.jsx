import React, { useState } from 'react';
import './home.css'
import CardHome from './CardHome';
import LogIn from '../logIn/LogIn'
import SignUp from '../signUp/SignUp'
import UserPage from '../userPage/UserPage'

function Home() {


    const handleLogOut = () => {

        let option = window.confirm('Estas seguro de querer Salir?')
        if (option) {
            localStorage.removeItem(["accessToken"]);
            localStorage.removeItem(["email"]);
            setTimeout(() => {
                window.location.reload();
            }, 500)
        }
    }


    const [visible, setVisible] = useState(0)
    let token = localStorage.getItem('accessToken')

    return (
        <div className='page'>
            <section className='section'>
                <div className='subSection'>
                    <div className='btn' style={{ display: visible === 3 ? "" : "none" }}>
                        <button className="btn btn-outline-light btnCenter btnStyle" onClick={() => setVisible(0)} type='button'>Volver</button>
                    </div>
                </div>
                <div className='subSection'>
                    <article className='components'>
                        {visible === 0 ? (<CardHome />) : visible === 1 ? (<LogIn />) : visible === 2 ? (<SignUp />) : (<UserPage />)}
                    </article>
                </div>
                <div className='subSection'>
                    <div style={{ display: token === null ? "flex" : "none" }}>
                        <div className='btn-group group-button homeButtons' style={{ display: visible === 1 || visible === 2 ? "none" : "" }}>
                            <button className="btn btn-outline-light btnCenter btnStyle" style={{ display: visible === 2 ? "none" : "" }} onClick={() => setVisible(1)} type='button' >LogIn</button>
                            <button className="btn btn-outline-light btnCenter btnStyle" style={{ display: visible === 1 ? "none" : "" }} onClick={() => setVisible(2)} type='button'>Register</button>
                        </div>
                    </div>

                    <div style={{ display: visible === 3 ? "none" : "" }}>
                        <div className='btn-group group-button homeButtons' style={{ display: token != null ? "flex" : "none" }}>
                            <button className="btn btn-outline-light btnCenter btnStyle" type='button' onClick={() => setVisible(3)}>Usuarios</button>
                            <button className="btn btn-outline-light btnCenter btnStyle" onClick={handleLogOut}>LogOut</button>
                        </div>
                        <div className='btn group-button' style={{ display: visible === 0 ? "none" : "" }}>
                            <button className="btn btn-outline-light btnCenter btnStyle" onClick={() => setVisible(0)} type='button'>Volver</button>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Home;