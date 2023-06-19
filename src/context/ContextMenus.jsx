import { useState, useEffect, createContext } from 'react'
import PropTypes from 'prop-types'
import { useFetchMenus } from '../api'

export const ContextMenus = createContext()

export const MenusProvider = ({ children }) => {

    const { FetchMenus, dataMenus, isLoadedMenus, isErrorMenus  } = useFetchMenus()
    const [ menuPrincipal, setMenuPrincipal ] = useState()
    const [ menuMobile, setMenuMobile ] = useState()
    const [ menuFooter, setMenuFooter ] = useState()

    useEffect(() => {
        FetchMenus()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    // Show fetch errors in console
    useEffect(()=> {
        if (isLoadedMenus) {
            if(isErrorMenus != null){
                console.log("Error API menus" + isErrorMenus)
            } else {
                const menuPrincipal = dataMenus.filter(obj => obj.location === "menu-principal")
                const menuMobile = dataMenus.filter(obj => obj.location === "menu-mobile")
                const menuFooter = dataMenus.filter(obj => obj.location === "menu-footer")
                
                if(menuPrincipal) {
                    const menuPrincipalItems = menuPrincipal.map(i => i.items)
                    menuPrincipalItems.length > 0 && setMenuPrincipal(menuPrincipalItems.flat())
                }

                if(menuMobile) {
                    const menuMobileItems = menuMobile.map(i => i.items)
                    menuMobileItems.length > 0 && setMenuMobile(menuMobileItems.flat())
                }

                if(menuFooter) {
                    const menuFooterItems = menuFooter.map(i => i.items)
                    menuFooterItems.length > 0 && setMenuFooter(menuFooterItems.flat())
                }

            }
        }
    }, [dataMenus, isErrorMenus, isLoadedMenus])

  return (
    <ContextMenus.Provider
      value={{
        menuPrincipal,
        menuMobile,
        menuFooter,
        isLoadedMenus
      }}
    >
      {children}
    </ContextMenus.Provider>
  )
}

MenusProvider.propTypes = {
  children: PropTypes.any,
}