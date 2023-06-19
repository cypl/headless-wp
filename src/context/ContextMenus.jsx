import { useEffect, createContext } from 'react'
import PropTypes from 'prop-types'
import { useFetchMenus } from '../api'

export const ContextMenus = createContext()

export const MenusProvider = ({ children }) => {

    const { FetchMenus, dataMenus, isLoadedMenus, isErrorMenus  } = useFetchMenus()
  
    useEffect(() => {
        FetchMenus()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    // Show fetch errors in console
    useEffect(()=> {
        if (isLoadedMenus) {
            if(isErrorMenus != null){
                console.log("Error API menus" + isErrorMenus)
            }
            console.log(dataMenus.filter(obj => obj.location === "menu-principal"))
        }
    }, [dataMenus, isErrorMenus, isLoadedMenus])

    //const menuPrincipal = dataMenus.filter(obj => obj.location === "menu-principal")

  return (
    <ContextMenus.Provider
      value={{
        dataMenus,
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