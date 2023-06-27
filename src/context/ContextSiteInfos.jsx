import { useState, useEffect, createContext } from 'react'
import PropTypes from 'prop-types'
import { useFetchMenus, useFetchSiteInfos } from '../api'

export const ContextSiteInfos = createContext()

export const SiteInfosProvider = ({ children }) => {

    const { FetchMenus, dataMenus, isLoadedMenus, isErrorMenus } = useFetchMenus()
    const [ menuPrincipal, setMenuPrincipal ] = useState()
    const [ menuMobile, setMenuMobile ] = useState()
    const [ menuFooter, setMenuFooter ] = useState()
    const { FetchSiteInfos, dataSiteInfos, isLoadedSiteInfos, isErrorSiteInfos } = useFetchSiteInfos()


    useEffect(() => {
        FetchMenus()
        FetchSiteInfos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    // Menus routes - Show fetch errors in console and filter data
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

    // Site infos routes - Show fetch errors in console and filter data
    useEffect(()=> {
        if (isLoadedSiteInfos) {
            if(isErrorSiteInfos != null){
                console.log("Error API site infos" + isErrorSiteInfos)
            }
        }
    }, [isErrorSiteInfos, isLoadedSiteInfos])

  const [ burgerOpen, setBurgerOpen ] = useState(false)

  function burgerToggle(){
    setBurgerOpen(!burgerOpen)
    if(!burgerOpen){
      document.getElementsByTagName('html')[0].style.overflowY = "hidden"
    }else{
      document.getElementsByTagName('html')[0].style.overflowY = "auto"
    }
  }

  return (
    <ContextSiteInfos.Provider
      value={{
        menuPrincipal,
        menuMobile,
        menuFooter,
        isLoadedMenus,
        dataSiteInfos,
        isLoadedSiteInfos,
        burgerOpen,
        burgerToggle,
      }}
    >
      {children}
    </ContextSiteInfos.Provider>
  )
}

SiteInfosProvider.propTypes = {
  children: PropTypes.any,
}