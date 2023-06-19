import { useContext } from 'react'
import { ContextMenus } from '../context/ContextMenus'

function Header(){
    const {
        dataMenus,
        isLoadedMenus
      } = useContext(ContextMenus)

    return(
        <>
            {isLoadedMenus && dataMenus.length > 0 && (<p>Ceci est un Header avec un menu</p>)}
        </>
    )
}
export default Header