import { useNavigate } from 'react-router-dom'

export default function LogOut() {

    let option = window.confirm('Estas seguro de querer Salir?')
    const navigate = useNavigate();
    if (option) {
        localStorage.removeItem(["accessToken"]);
        localStorage.removeItem(["email"]);

        setTimeout(() => {
            navigate('/')
        }, 0)
    } else {
        setTimeout(() => {
            navigate('/')
        }, 0)
    }
}