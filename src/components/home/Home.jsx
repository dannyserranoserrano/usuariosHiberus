import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Bienvenidos a la prueba de Danny</h1>
            <div>
                <label>Estas registrado?</label>
                <Link className="btn btn-primary" type='button' to="/SignUp">Register</Link>
            </div>

            <div>
                <label>Logueate</label>
                <Link className="btn btn-primary" type='button' to="/LogIn">LogIn</Link>
            </div>

            <div>
                <label>LogOut</label>
                <Link className="btn btn-primary" type='button' to="/LogOut">LogOut</Link>
            </div>

        </div>
    )
}

export default Home;