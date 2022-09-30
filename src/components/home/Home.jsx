import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'
import LogoHeroes from '../../assets/Logo Heroes y Heroinas.png'
import { useState } from 'react';

function Home() {

    // const [token, setToken] = useState(null);

    let token = localStorage.getItem('accessToken')
    let user = localStorage.getItem('email')

    console.log(token)



    return (
        <div id='home'>
            <header className='title'>
                <p>Prueba practica de Front</p>
            </header>

            <section className='section'>
                <aside className='aside'>
                    <div className="texto">
                        <div style={{ display: user != null ? "block" : "none" }}>
                            <h6>Tu usuario: <br /> {user}</h6>
                        </div>
                        <div style={{ display: user == null ? "block" : "none" }}>
                            <h6>No estas logueado</h6>
                        </div>
                    </div>
                    <div className='group-button'>
                        <div id='logIn' style={{ display: token == null ? "block" : "none" }}>
                            <Link to="/logIn"><button className="btn btn-primary" type='button'>LogIn</button></Link>
                        </div>
                        <div id='signUp' style={{ display: token == null ? "block" : "none" }}>
                            <Link className="btn btn-primary" type='button' to="/signUp">Register</Link>

                        </div>
                    </div>

                    <div className='group-button'>
                        <div id='userPage' style={{ display: token != null ? "block" : "none" }}>
                            <Link className="btn btn-primary" type='button' to="/userPage">Usuarios</Link>
                        </div>
                        <div id='logOut' style={{ display: token != null ? "block" : "none" }}>
                            <Link className="btn btn-primary" type='button' to="/logOut">Log Out</Link>
                        </div>
                    </div>
                </aside>
            </section>
        </div >
    )
}

export default Home;