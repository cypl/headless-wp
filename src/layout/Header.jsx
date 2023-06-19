import { useContext } from 'react'
import { ContextMenus } from '../context/ContextMenus'
import { NavLink } from 'react-router-dom'

function Header(){
    const {
        menuPrincipal
      } = useContext(ContextMenus)
      
    return(
        <>  <p>Ceci est un Header</p>
            <p>
                {menuPrincipal && menuPrincipal.length > 0 && (
                    menuPrincipal.map((i, index) => (
                        <NavLink key={index} to={i.url}>{i.title}</NavLink>
                    ))
                )}
            </p>
        </>
    )
}
export default Header