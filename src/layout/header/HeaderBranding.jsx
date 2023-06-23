import { useContext } from 'react'
import { ContextSiteInfos } from '../../context/ContextSiteInfos'
import { ContextAcfOptions } from '../../context/ContextAcfOptions'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import PropTypes from 'prop-types'


function HeaderBranding({hasScrolled}){
    const { dataSiteInfos } = useContext(ContextSiteInfos)
    const { dataAcfHeader } = useContext(ContextAcfOptions)

    return (
        <Branding>
            {dataAcfHeader && dataSiteInfos &&
                <figure className="figure-logo-header">
                    {dataAcfHeader && 
                        <NavLink to="/">
                            <img className={!hasScrolled ? `logo_header_img ${dataAcfHeader.logoSizeTop}` : `logo_header_img ${dataAcfHeader.logoSizeScroll}`} src={dataAcfHeader.logo} alt={dataSiteInfos.name} />
                        </NavLink>
                    }
                </figure>
            }
        </Branding>
    )

}

export default HeaderBranding

HeaderBranding.propTypes = {
    hasScrolled: PropTypes.bool,
}

const Branding = styled.div`
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
            transition:0.15s height ease-in-out;
        }
        & .height30 {
            height: 30px;
            transition:0.15s height ease-in-out;
        }
        & .height35 {
            height: 35px;
            transition:0.15s height ease-in-out;
        }
        & .height40 {
            height: 40px;
            transition:0.15s height ease-in-out;
        }
        & .height45 {
            height: 45px;
            transition:0.15s height ease-in-out;
        }
        & .height50 {
            height: 50px;
            transition:0.15s height ease-in-out;
        }
        & .height55 {
            height: 55px;
            transition:0.15s height ease-in-out;
        }
        & .height60 {
            height: 60px;
            transition:0.15s height ease-in-out;
        }
        & .height65 {
            height: 65px;
            transition:0.15s height ease-in-out;
        }
        & .height70 {
            height: 70px;
            transition:0.15s height ease-in-out;
        }
        & .height75 {
            height: 75px;
            transition:0.15s height ease-in-out;
        }
        & .height80 {
            height: 80px;
            transition:0.15s height ease-in-out;
        }
    }
`