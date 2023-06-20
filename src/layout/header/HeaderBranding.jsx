import { useContext } from 'react'
import { ContextSiteInfos } from '../../context/ContextSiteInfos'
import { ContextAcfOptions } from '../../context/ContextAcfOptions'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components';
import PropTypes from 'prop-types'


function HeaderBranding({hasScrolled}){
    const {
        dataSiteInfos
      } = useContext(ContextSiteInfos)
    const {
        dataAcfHeader
      } = useContext(ContextAcfOptions)

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
`