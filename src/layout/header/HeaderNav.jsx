import { useContext } from 'react'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { ContextSiteInfos } from '../../context/ContextSiteInfos'
import { ContextAcfOptions } from '../../context/ContextAcfOptions'
import CallToAction from '../../components/CallToAction'
import { colors } from '../../utils/theme'

function HeaderNav() {
    const { menuPrincipal } = useContext(ContextSiteInfos)
    const { dataAcfHeader } = useContext(ContextAcfOptions)

    // Si le NavLink qui a la classe .active a aussi une classe .sub-menu-link
    // alors le <li> parent qui a la classe .parent doit avoir son élément enfant <NavLink> avec la classe ".menu-link" prendre également la classe ".active"
  
    
    return (
      <>  
        <ContentNavHeader>

          <MenuHeader>
            {menuPrincipal && menuPrincipal.length > 0 && (
              menuPrincipal.map((i, index) => (
                <li key={index} className='parent'>
                  <NavLink key={index} to={i.url} className="menu-link">{i.title}</NavLink>
                  {/* sous-menu */}
                  {i.children && i.children.length > 0 && (
                    <SubMenu className="sub-menu">
                      <div>
                        {i.children.map((child, index) => (
                          <li key={index}>
                            <NavLink key={index} to={child.url} className="sub-menu-link">{child.title}</NavLink>
                          </li>
                        ))}
                      </div>
                    </SubMenu>
                  )}
                </li>
              ))
            )}
          </MenuHeader>
          
          <CallToAction 
            text={dataAcfHeader && dataAcfHeader.txtPhone} 
            type={"phone"} 
            href={dataAcfHeader && `tel:` + dataAcfHeader.txtPhone}
            target={"externe"}
            />

          <CallToAction 
            text={dataAcfHeader && dataAcfHeader.btnTxt} 
            type={"primaire"}
            href={dataAcfHeader && dataAcfHeader.btnRoute}
            target={"interne"}
            />

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
const MenuHeader = styled.ul`
    height: 40px;
    width: auto;
    position: relative;
    margin-left: 0;
    text-align: right;
    display: flex;
    justify-content: flex-end;
    & li{
        line-height: 40px;
        font-size: 0.85rem;
        background: transparent;
        position: relative;
        & a{
            display: inline-block;
            padding: 0 15px;
            color: #193C2B;
            position: relative;
            transition: 0.1s color ease-in-out;
            white-space: nowrap;
            font-weight:bold;
            &::after {
                content: "";
                position: absolute;
                width: 0;
                height: 2px;
                bottom: 3px;
                left: 50%;
                transform: translate(-50%, 0);
                background-color: ${colors.secondaire1};
                transition: 0.2s width ease-in-out;
            }
            &:hover::after{
                width: calc(100% - 30px);
                transition: 0.2s width ease-in-out;
            }
            &.active::after{
                width: calc(100% - 30px);
            }
        }
        & .sub-menu{
            display: none;
        }
        &:hover .sub-menu{
            display: block;
        }
    }
`
const SubMenu = styled.ul`
    padding-top:7px;
    & div{
        background-color: ${colors.clair2};
        border-radius:4px;
        overflow:hidden;
    }
    & li{
        position:relative;
        & a{
            position:relative;
            width:100%;
            background-color: ${colors.clair2};
            transition:0.05s color ease-in-out, 0.1s background-color ease-in-out;
            &::after {
                display:none;
            }
            &:hover{
                background-color: ${colors.primaire};
                color:#fff;
                transition:0.05s color ease-in-out, 0.1s background-color ease-in-out;
            }
            &.active{
                background-color: ${colors.primaire};
                color:#fff;
            }
        }
    }
`