import { useContext } from 'react'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { ContextSiteInfos } from '../../context/ContextSiteInfos'
import { colors } from '../../utils/theme'

function HeaderNavMenu(){
    const { menuPrincipal, burgerOpen } = useContext(ContextSiteInfos)

    // Si le NavLink qui a la classe .active a aussi une classe .sub-menu-link
    // alors le <li> parent qui a la classe .parent doit avoir son élément enfant <NavLink> avec la classe ".menu-link" prendre également la classe ".active"

    return (
        <MenuHeader className={burgerOpen && "hideMenu"}>
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
    )
}

export default HeaderNavMenu

const MenuHeader = styled.ul`
    height: 40px;
    width: auto;
    position: relative;
    margin-left: 0;
    text-align: right;
    display: flex;
    justify-content: flex-end;
    opacity:1;
    transition:0.1s opacity ease-in-out;
    &.hideMenu{
        opacity:0.5;
        pointer-events:none;
        transition:0.1s opacity ease-in-out;
    }
    & li{
        line-height: 40px;
        font-size: 0.8rem;
        background: transparent;
        position: relative;
        & a{
            display: inline-block;
            padding: 0 10px;
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
                width: calc(100% - 20px);
                transition: 0.2s width ease-in-out;
            }
            &.active::after{
                width: calc(100% - 20px);
            }
        }
        & .sub-menu{
            visibility: hidden;
            opacity:0;
            transform: translateY(10px);
            transition:0.1s opacity ease-in-out, 0.1s transform ease-in-out;
        }
        &:hover .sub-menu{
            visibility: visible;
            opacity:1;
            transform: translateY(0px);
            transition:0.1s opacity ease-in-out, 0.1s transform ease-in-out;
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