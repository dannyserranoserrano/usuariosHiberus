import React from 'react'
//Tarjeta de estado para el home
export default function CardHome() {
    let user = localStorage.getItem('email')
    return (

        <aside className='aside m-5'>
            <div className="textHome">
                <div style={{ display: user != null ? "block" : "none" }}>
                    <p><strong> Estas Loguead@ como: </strong><br /> {user}</p>
                </div>
                <div style={{ display: user == null ? "block" : "none" }}>
                    <p><strong> No estas logueado </strong><br />Logueate o Registrate</p>
                </div>
            </div>
        </aside>

    )
}
