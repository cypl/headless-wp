import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Error(){
    const { pathname } = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (pathname != "/404") {
            navigate("/404")
        }
    },[])

    return (
        <p>Erreur 404</p>
    )

}

export default Error