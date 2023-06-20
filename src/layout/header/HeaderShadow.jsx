import { styled } from 'styled-components'


function HeaderShadow(){
    return(
        <HeaderShadowBottom></HeaderShadowBottom>
    )
}

export default HeaderShadow

const HeaderShadowBottom = styled.div`
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