import React from 'react'

export default function CardHome() {
    let user = localStorage.getItem('email')
    return (
        < div >
            <aside>
                <div className="textHome btnStyle">
                    <div style={{ display: user != null ? "block" : "none" }}>
                        <p><strong> Estas Loguead@ como: </strong><br /> {user}</p>
                    </div>
                    <div style={{ display: user == null ? "block" : "none" }}>
                        <p> No estas logueado</p>
                    </div>
                </div>
            </aside>
        </div>
    )
}
