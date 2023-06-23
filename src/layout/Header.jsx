import { useState, useEffect } from 'react'
import { styled, createGlobalStyle } from 'styled-components'
import HeaderBranding from './header/HeaderBranding'
import HeaderNav from './header/HeaderNav'
import HeaderShadow from './header/HeaderShadow'
import { colors } from '../utils/theme'

function Header(){

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

    const [ burgerOpen, setBurgerOpen ] = useState(false)

    function burgerToggle(){
        setBurgerOpen(!burgerOpen)
    }
      
    return(
        <>  
            <GlobalStyle hasScrolled={hasScrolled} />
            <HeaderContainer className="header">
                <HeaderBranding hasScrolled={hasScrolled} />
                <HeaderNav burgerToggle={burgerToggle} burgerOpen={burgerOpen}/>
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
    display:none;
    &.open{
        display:block;
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
    display:none;
    &.open{
        display:block;
    }
`