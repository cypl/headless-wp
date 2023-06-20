import { useState, useEffect } from 'react'
import { styled, createGlobalStyle } from 'styled-components'
import HeaderBranding from './header/HeaderBranding'
import HeaderNav from './header/HeaderNav'


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
      
    return(
        <>  
            <GlobalStyle hasScrolled={hasScrolled} />
            <HeaderContainer className="header">
                <HeaderBranding hasScrolled={hasScrolled} />
                <HeaderNav />
                <HeaderShadow></HeaderShadow>
            </HeaderContainer>
            <HeaderBackground></HeaderBackground>
        </>
    )
}

export default Header

const GlobalStyle = createGlobalStyle`
    .header {
        height: ${props => (props.hasScrolled ? "60px" : "100px")};
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