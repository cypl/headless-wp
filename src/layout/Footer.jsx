import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ContextSiteInfos } from '../context/ContextSiteInfos'
import styled from 'styled-components'
import { colors } from '../utils/theme'

const currentYear = new Date().getFullYear()

function Footer(){
    const {
        menuFooter,
        dataSiteInfos,
      } = useContext(ContextSiteInfos)
    
    return(
        <FooterContainer>
            <FooterWrapper>
                <p>© {currentYear} {dataSiteInfos && dataSiteInfos.name}
                    <span className="pre_signature_footer"> - </span>
                    <span className="signature_footer">Nanosite par { }
                    <Link to="https://www.useweb.fr/" target="_blank">
                        <LogoSignature xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.69 56.69">
                            <polygon points="28.36 56.72 32.22 47.49 47.46 9.59 47.49 9.59 51.58 0.02 30.45 0.02 30.45 9.59 38.28 9.59 28.64 33.69 19 9.59 26.81 9.59 26.81 0.02 5.63 0.02 9.41 9.48 28.36 56.72"/>
                        </LogoSignature>
                    </Link></span>
                    <span className="pre_menu-footer"> - </span>
                    {menuFooter && menuFooter.length > 0 && (
                        <span className="menu-footer">
                            {menuFooter.map((i, index) => (
                                <NavLink key={index} to={i.url}>{i.title}</NavLink>
                            ))}
                        </span>
                    )}
                </p>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.footer`
    background-color: ${colors.primaire};
    position: relative;
    z-index:2;
`
const FooterWrapper = styled.div`
    width:calc(100% - 150px);
    margin:auto;
    display: flex;
    flex-wrap: wrap;
    padding: 2rem 0 2rem 0;
    & p{
        color: #fff;
        line-height: 2;
        width: 100%;
        text-align: center;
        position: relative;
        font-size: 0.8rem;
        margin: 0;
        & .menu-footer{
            & a {
                white-space: nowrap;
                display: inline-block;
                &::after {
                    content: "|";
                    margin: 0 0.4rem 0 0.4rem;
                    color: ${colors.primaire1};
                }
                &:last-of-type::after {
                    content: none;
                }
            }
        }
        & .pre_signature_footer{
            @media (max-width: 640px) {
                display:none;
            }
        }
        & .signature_footer{
            @media (max-width: 640px) {
                display:block;
                margin-bottom:1.5rem;
            }
        }
        & .pre_menu-footer{
            @media (max-width: 768px) {
                display:none;
            } 
        }
        & .menu-footer{
            @media (max-width: 768px) {
                display:block;
            }
        }
    }
`
const LogoSignature = styled.svg`
    display: inline-block;
    width: 1rem;
    transition:0.1s color ease-in-out;
    & polygon{
        fill:${colors.primaire1};
        transition:0.1s fill ease-in-out;
    }
    &:hover polygon{
        fill:${colors.clair};
        transition:0.1s fill ease-in-out;
    }
`