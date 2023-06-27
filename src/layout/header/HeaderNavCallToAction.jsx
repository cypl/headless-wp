import { useContext } from 'react'
import { styled } from 'styled-components'
import { ContextAcfOptions } from '../../context/ContextAcfOptions'
import { ContextSiteInfos } from '../../context/ContextSiteInfos'
import CallToAction from '../../components/CallToAction'


function HeaderNavCallToAction(){
    const { dataAcfHeader } = useContext(ContextAcfOptions)    
    const { burgerOpen } = useContext(ContextSiteInfos)

    return (
        <CallToActionMenu className={burgerOpen && "hideCtaMenus"}>
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
        </CallToActionMenu>
    )
}

export default HeaderNavCallToAction


const CallToActionMenu = styled.div`
    opacity:1;
    transition:0.1s opacity ease-in-out;
    &.hideCtaMenus{
        opacity:0.5;
        pointer-events:none;
        transition:0.1s opacity ease-in-out;
    }
`
