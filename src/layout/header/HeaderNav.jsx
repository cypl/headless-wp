import { useState, useContext } from 'react'
import { styled } from 'styled-components'
import { ContextAcfOptions } from '../../context/ContextAcfOptions'
import HeaderNavMenu from './HeaderNavMenu'
import CallToAction from '../../components/CallToAction'
import { colors } from '../../utils/theme'

function HeaderNav() {
    const { dataAcfHeader } = useContext(ContextAcfOptions)    
    const [ burgerOpen, setBurgerOpen ] = useState(false)

    function burgerToggle(){
        setBurgerOpen(!burgerOpen)
    }

    return (
      <>  
        <ContentNavHeader>

            <HeaderNavMenu/>
          
            {dataAcfHeader && dataAcfHeader.showPhone && 
                <CallToAction 
                    text={dataAcfHeader && dataAcfHeader.txtPhone} 
                    type={"phone"} 
                    href={dataAcfHeader && `tel:` + dataAcfHeader.txtPhone}
                    target={"externe"}
                    style={{marginLeft:"10px"}}
                />
            }

            <CallToAction 
                text={dataAcfHeader && dataAcfHeader.btnTxt} 
                type={"primaire"}
                href={dataAcfHeader && dataAcfHeader.btnRoute}
                target={"interne"}
                style={{marginLeft:"10px"}}
            />

            <BurgerTrigger onClick={() => burgerToggle()} className={burgerOpen && "open"}>
                <div><span></span><span></span><span></span><span></span></div>
            </BurgerTrigger>

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
const BurgerTrigger = styled.div`
    position:relative;
    width: 28px;
    height: 18px;
    cursor: pointer;
    margin-left:20px;
    & div{
        position:absolute;
        width: 28px;
        height: 18px;
        & span{
            display: block;
            position: absolute;
            height: 3px;
            width: 100%;
            background-color: ${colors.primaire2};
            border-radius: 1em;
            opacity: 1;
            left: 0;
            transform: rotate(0deg);
            transition: 0.2s ease-in-out;
            &:nth-child(1) {
                top: 0px;
            }
            &:nth-child(2),
            &:nth-child(3) {
                top: 8px;
            }
            &:nth-child(4) {
                top: 16px;
            }
        }
    }
    &.open{
        & span:nth-child(1) {
            top: 10px;
            width: 0%;
            left: 50%;
        }
          
        & span:nth-child(2) {
            transform: rotate(45deg);
        }
          
        & span:nth-child(3) {
            transform: rotate(-45deg);
        }
          
        & span:nth-child(4) {
            top: 10px;
            width: 0%;
            left: 50%;
        }
    }
`