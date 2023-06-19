import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ContextMenus } from '../context/ContextMenus'

const currentYear = new Date().getFullYear()

function Header(){
    const {
        menuFooter
      } = useContext(ContextMenus)
      
    return(
        <p>© {currentYear} ###SiteName### - { }
            {menuFooter.length > 0 && (
                menuFooter.map((i, index) => (
                    <NavLink key={index} to={i.url}>{i.title}</NavLink>
                ))
            )}
        </p>
    )
}
export default Header