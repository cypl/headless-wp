import { useContext } from 'react'
import { ContextRoutes } from './context/ContextRoutes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Page from './pages/Page'
import Post from './pages/Post'
import Bateau from './pages/Bateau'
import Error from './pages/Error'

/**
 * Displays the routes of the application.
 * @returns {JSX.Element} - The JSX markup for the Router component.
 */
function Routar(){
    const {
        dataPagesRoutes,
        dataPostsRoutes,
        dataBateauxRoutes,
        isLoadedPagesRoutes,
        isLoadedPostsRoutes,
        isLoadedBateauxRoutes,
      } = useContext(ContextRoutes)
    
    return (
        <>
            {isLoadedPagesRoutes && isLoadedPostsRoutes && isLoadedBateauxRoutes && (
                <BrowserRouter>
                    <Routes>
                        {dataPagesRoutes && dataPagesRoutes.length > 0 && dataPagesRoutes?.map((p) => (
                            <Route key={p.id} path={p.route} element={<Page id={p.id} />} />
                        ))}
                        {dataPostsRoutes && dataPostsRoutes.length > 0 && dataPostsRoutes?.map((p) => (
                            <Route key={p.id} path={p.route} element={<Post id={p.id} />} />
                        ))}
                        {dataBateauxRoutes && dataBateauxRoutes.length > 0 && dataBateauxRoutes?.map((p) => (
                            <Route key={p.id} path={p.route} element={<Bateau id={p.id} />} />
                        ))}
                        <Route path="*" element={<Error />} />
                    </Routes>
                </BrowserRouter>
            )}
        </>
      )
}

export default Routar