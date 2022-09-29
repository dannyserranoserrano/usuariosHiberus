import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const UserPage = () => {

    const [users, setUsers] = useState([]);
    const accessToken = localStorage.getItem("accessToken")
    const config = {
        headers: { Authorization: `Bearer ${accessToken}` }
    }

    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get("http://51.38.51.187:5050/api/v1/users",
                config)
            console.log(response.data.items);
            setUsers(response.data.items);
        }
        getUsers();
    }, []);


    return (
        <div>
            <h1>Lista de Usuarios</h1>

            <div>
                {users.map(e => (
                    <div key={e._id}>
                        <div>
                            {e.email}
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default UserPage