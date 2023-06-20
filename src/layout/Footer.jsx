import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ContextSiteInfos } from '../context/ContextSiteInfos'

const currentYear = new Date().getFullYear()

function Header(){
    const {
        menuFooter,
        dataSiteInfos,
      } = useContext(ContextSiteInfos)
    
    return(
        <p>© {currentYear} {dataSiteInfos && dataSiteInfos.name} - { }
            {menuFooter && menuFooter.length > 0 && (
                menuFooter.map((i, index) => (
                    <NavLink key={index} to={i.url}>{i.title}</NavLink>
                ))
            )}
        </p>
    )
}
export default Header