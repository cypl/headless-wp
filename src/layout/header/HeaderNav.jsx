import { useContext } from 'react'
import { ContextSiteInfos } from '../context/ContextSiteInfos'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

function HeaderNav(){

    const { menuPrincipal } = useContext(ContextSiteInfos)
    
    return(
        <>  
            <ContentNavHeader>
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
            </ContentNavHeader>
        </>
    )
}
export default HeaderNav

const ContentNavHeader = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 1;
    transition: 0.3s right ease-in-out;
    margin-right: 2rem;
`