import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

function Home() {

    // const [token, setToken] = useState(null);

    let token = localStorage.getItem('accessToken')
    let user = localStorage.getItem('email')

    // console.log(token)

    return (
        <div className='page'>
            <header className='title'>
                <p>Prueba practica de Front</p>
            </header>

            <section className='section'>
                <div className='subSection'>
                    <aside className='aside'>
                        <div className="text">
                            <div style={{ display: user != null ? "block" : "none" }}>
                                <p><strong> Tu usuario: </strong><br /> {user}</p>
                            </div>
                            <div style={{ display: user == null ? "block" : "none" }}>
                                <p><strong> No estas logueado</strong></p>
                            </div>
                        </div>
                    </aside>
                </div>
                <div className='subSection'>
                    <div className='btn-group group-button' id='logIn' style={{ display: token == null ? "flex" : "none" }}>
                        <Link className="btn btn-outline-warning btnCenter" type='button' to="/logIn">LogIn</Link>
                        <Link className="btn btn-outline-success btnCenter" type='button' to="/signUp">Register</Link>
                    </div>

                    <div className='btn-group group-button' id='userPage' style={{ display: token != null ? "flex" : "none" }}>
                        <Link className="btn btn-outline-success btnCenter" type='button' to="/userPage">Usuarios</Link>
                        <Link className="btn btn-outline-warning btnCenter" type='button' to="/logOut">Log Out</Link>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Home;