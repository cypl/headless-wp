import { useState, useEffect, useContext } from 'react'
import { ContextSiteInfos } from '../context/ContextSiteInfos'
import { NavLink } from 'react-router-dom'
import { styled, createGlobalStyle } from 'styled-components';
import HeaderBranding from './header/HeaderBranding';
// import { colors } from '../utils/theme'

const GlobalStyle = createGlobalStyle`
    .header {
        height: ${props => (props.hasScrolled ? "60px" : "100px")};
    }
`

function Header(){
    const {
        menuPrincipal,
      } = useContext(ContextSiteInfos)

    const [ hasScrolled, setHasScrolled ] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 150) {
                setHasScrolled(true)
            } else {
                setHasScrolled(false)   
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
      

    return(
        <>  
            <GlobalStyle hasScrolled={hasScrolled} />
            <HeaderContainer className="header">
                <HeaderBranding hasScrolled={hasScrolled} />

                <div className='content_nav_header'>
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
                </div>
            <HeaderShadow></HeaderShadow>
            </HeaderContainer>
            <HeaderBackground></HeaderBackground>
        </>
    )
}
export default Header

const HeaderContainer = styled.header`
    background-color: #fff;
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    z-index: 999;
    & .branding{
        height: 100%;
        margin-left: 2rem;
        z-index: 2;
        position:relative;
        display: flex;
        & .figure-logo-header {
            margin: 0;
            position: relative;
            display: flex;
            align-items: center;
            & .logo_header_img {
                width: auto;
                z-index: 1;
            }
            & .height25 {
                height: 25px;
            }
            & .height30 {
                height: 30px;
            }
            & .height35 {
                height: 35px;
            }
            & .height40 {
                height: 40px;
            }
            & .height45 {
                height: 45px;
            }
            & .height50 {
                height: 50px;
            }
            & .height55 {
                height: 55px;
            }
            & .height60 {
                height: 60px;
            }
            & .height65 {
                height: 65px;
            }
            & .height70 {
                height: 70px;
            }
            & .height75 {
                height: 75px;
            }
            & .height80 {
                height: 80px;
            }
        }
    }
    & .content_nav_header{
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        z-index: 1;
        transition: 0.3s right ease-in-out;
        margin-right: 2rem;
    }
`
const HeaderBackground = styled.div`
    background-color: #fff;
    height: 100px;
    width: 100%;
`
const HeaderShadow = styled.div`
    height: 12px;
    width: 100%;
    position: absolute;
    bottom: -12px;
    opacity: 0.25;
    background: rgb(0, 0, 0);
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.7) 0%,
        rgba(0, 0, 0, 0) 100%
    );
`