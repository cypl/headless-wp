import { useContext } from 'react'
import { ContextSiteInfos } from '../context/ContextSiteInfos'
import { NavLink } from 'react-router-dom'

function Header(){
    const {
        menuPrincipal
      } = useContext(ContextSiteInfos)
      
    return(
        <>  
            <p>Ceci est un Header</p>
            <ul>
                {menuPrincipal && menuPrincipal.length > 0 && (
                    menuPrincipal.map((i, index) => (
                        <li key={index}>
                            <NavLink key={index} to={i.url}>{i.title}</NavLink>
                            {/* sous-menu */}
                            {i.children && (
                                <ul className="sub-menu">
                                    {i.children.map((child, index) => (
                                            <li key={index}>
                                                <NavLink key={index} to={child.url}>{child.title}</NavLink>
                                            </li>
                                        )
                                    )}
                                </ul>)
                            }
                        </li>
                    ))
                )}
            </ul>
        </>
    )
}
export default Header