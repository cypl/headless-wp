import { useEffect, useContext } from 'react'
import { ContextMenus } from '../context/ContextMenus'


function Header(){
    const {
        menuPrincipal,
        isLoadedMenus
      } = useContext(ContextMenus)
      
    // Show fetch errors in console
    useEffect(()=> {
        if (isLoadedMenus) {
            console.log(menuPrincipal)  
        }
    }, [isLoadedMenus, menuPrincipal])

    return(
        <>
            {isLoadedMenus && 
            menuPrincipal && 
            menuPrincipal.length > 0 && (
                <p>Ceci est un Header avec un menu principal</p>
            )}
        </>
    )
}
export default Header