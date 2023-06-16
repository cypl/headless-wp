import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useFetchPagesRoutes, useFetchPostsRoutes, useFetchBateauxRoutes } from './api'
import Page from './pages/Page'
import Post from './pages/Post'
import Bateau from './pages/Bateau'
import Error from './pages/Error'

/**
 * Displays the routes of the application.
 * @returns {JSX.Element} - The JSX markup for the Router component.
 */
function Router(){
    const { FetchPagesRoutes, dataPagesRoutes, isLoadedPagesRoutes, isErrorPagesRoutes  } = useFetchPagesRoutes()
    const { FetchPostsRoutes, dataPostsRoutes, isLoadedPostsRoutes, isErrorPostsRoutes  } = useFetchPostsRoutes()
    const { FetchBateauxRoutes, dataBateauxRoutes, isLoadedBateauxRoutes, isErrorBateauxRoutes  } = useFetchBateauxRoutes()
  
    useEffect(() => {
        FetchPagesRoutes()
        FetchPostsRoutes()
        FetchBateauxRoutes()
    },[])

    // Show fetch errors in console
    useEffect(()=> {
        if (isLoadedPagesRoutes && isLoadedPostsRoutes && isLoadedBateauxRoutes) {
            if(isErrorPagesRoutes != null){
                console.log("Error API Routes pages" + isErrorPagesRoutes)
            }
            if(isErrorPostsRoutes != null){
                console.log("Error API Routes posts" + isErrorPostsRoutes)
            }
            if(isErrorBateauxRoutes != null){
                console.log("Error API Routes bateaux" + isErrorBateauxRoutes)
            }
        }
    }, [dataPagesRoutes, isErrorBateauxRoutes, isErrorPagesRoutes, isErrorPostsRoutes, isLoadedBateauxRoutes, isLoadedPagesRoutes, isLoadedPostsRoutes])
    
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

export default Router