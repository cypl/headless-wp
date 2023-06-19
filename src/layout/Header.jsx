import { useEffect, useContext } from 'react'
import { ContextMenus } from '../context/ContextMenus'

// [
//     {
//       "location": "menu-principal",
//       "items": [
//         {
//           "title": "Qui sommes-nous",
//           "url": "http://localhost:8888/headless-wp/qui-sommes-nous/",
//           "children": [
//             {
//               "title": "Ma liste de bateaux",
//               "url": "http://localhost:8888/headless-wp/ma-liste-de-bateaux/",
//               "children": []
//             },
//             {
//               "title": "Déclaration d’accessibilité",
//               "url": "http://localhost:8888/headless-wp/declaration-daccessibilite/",
//               "children": []
//             }
//           ]
//         },
//         {
//           "title": "Contact",
//           "url": "http://localhost:8888/headless-wp/contact/",
//           "children": []
//         },
//         {
//           "title": "Plan du site",
//           "url": "http://localhost:8888/headless-wp/plan-du-site/",
//           "children": []
//         }
//       ]
//     }
//   ]

function Header(){
    const {
        menuPrincipal,
        isLoadedMenus
      } = useContext(ContextMenus)
      
    useEffect(()=> {
        if (isLoadedMenus) {
            if(menuPrincipal) {
                console.log(menuPrincipal)
            }
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