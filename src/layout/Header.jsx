import { useState, useEffect, useContext } from 'react'
import { styled, createGlobalStyle } from 'styled-components'
import { ContextSiteInfos } from '../context/ContextSiteInfos'
import HeaderBranding from './header/HeaderBranding'
import HeaderNav from './header/HeaderNav'
import HeaderShadow from './header/HeaderShadow'
import { colors } from '../utils/theme'


function Header(){
    const { burgerOpen } = useContext(ContextSiteInfos)
    const [ hasScrolled, setHasScrolled ] = useState(false)
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 150) {
                setHasScrolled(true)
            } else {
                setHasScrolled(false)   
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    
      
    return(
        <>  
            <GlobalStyle hasScrolled={hasScrolled} />
            <HeaderContainer className="header">
                <HeaderBranding hasScrolled={hasScrolled} />
                <HeaderNav />
                <HeaderShadow />
            </HeaderContainer>
            <MenuMobile className={burgerOpen && "open"}></MenuMobile>
            <MenuMobileBackground className={burgerOpen && "open"}></MenuMobileBackground>
            <HeaderBackground></HeaderBackground>
        </>
    )
}

export default Header

const GlobalStyle = createGlobalStyle`
    .header {
        height: ${props => (props.hasScrolled ? "60px" : "100px")};
        transition:0.15s height ease-in-out;
    }
`

const HeaderContainer = styled.header`
    background-color: #fff;
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    z-index: 999;
`
const HeaderBackground = styled.div`
    background-color: #fff;
    height: 100px;
    width: 100%;
`
const MenuMobile = styled.div`
    position:absolute;
    height:calc(100% - 100px); // = hauteur du header au moment de l'ouverture
    width:400px;
    right:0;
    top:100px; // = hauteur du header au moment de l'ouverture
    background-color:${colors.clair2};
    z-index:999;
    visibility:hidden;
    opacity:0;
    transform:translateX(20px);
    transition:0.1s opacity ease-in-out 0.4s, 0.15s transform ease-in-out 0.4s;
    &.open{
        visibility:visible;
        opacity:1;
        transform:translateX(0px);
        transition:0.1s opacity ease-in-out 0.4s, 0.15s transform ease-in-out 0.4s;
    }
`
const MenuMobileBackground = styled.div`
    position:absolute;
    height:calc(100% - 100px); // = hauteur du header au moment de l'ouverture
    width:100%;
    right:0;
    top:100px; // = hauteur du header au moment de l'ouverture
    background-color:rgba(0,0,0,0.8);
    z-index:998;
    visibility:hidden;
    opacity:0;
    transition:0.1s opacity ease-in-out;
    &.open{
        visibility:visible;
        opacity:1;
        transition:0.1s opacity ease-in-out;
    }
`