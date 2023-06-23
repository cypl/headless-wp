import { useContext } from 'react'
import { styled } from 'styled-components'
import PropTypes from 'prop-types'
import { ContextAcfOptions } from '../../context/ContextAcfOptions'
import CallToAction from '../../components/CallToAction'


function HeaderNavCallToAction({burgerOpen}){
    const { dataAcfHeader } = useContext(ContextAcfOptions)    

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

HeaderNavCallToAction.propTypes = {
    burgerOpen: PropTypes.bool,
}

const CallToActionMenu = styled.div`
    opacity:1;
    transition:0.1s opacity ease-in-out;
    &.hideCtaMenus{
        opacity:0.5;
        pointer-events:none;
        transition:0.1s opacity ease-in-out;
    }
`
