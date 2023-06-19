import { useEffect, createContext } from 'react'
import PropTypes from 'prop-types'
import { useFetchPagesRoutes, useFetchPostsRoutes, useFetchBateauxRoutes } from '../api'

export const ContextRoutes = createContext()

export const RoutesProvider = ({ children }) => {

    const { FetchPagesRoutes, dataPagesRoutes, isLoadedPagesRoutes, isErrorPagesRoutes  } = useFetchPagesRoutes()
    const { FetchPostsRoutes, dataPostsRoutes, isLoadedPostsRoutes, isErrorPostsRoutes  } = useFetchPostsRoutes()
    const { FetchBateauxRoutes, dataBateauxRoutes, isLoadedBateauxRoutes, isErrorBateauxRoutes  } = useFetchBateauxRoutes()
  
    useEffect(() => {
        FetchPagesRoutes()
        FetchPostsRoutes()
        FetchBateauxRoutes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            // console.log(dataPagesRoutes)
            // console.log(dataPostsRoutes)
            // console.log(dataBateauxRoutes)
        }
    }, [dataBateauxRoutes, dataPagesRoutes, dataPostsRoutes, isErrorBateauxRoutes, isErrorPagesRoutes, isErrorPostsRoutes, isLoadedBateauxRoutes, isLoadedPagesRoutes, isLoadedPostsRoutes])

  return (
    <ContextRoutes.Provider
      value={{
        dataPagesRoutes,
        dataPostsRoutes,
        dataBateauxRoutes,
        isLoadedPagesRoutes,
        isLoadedPostsRoutes,
        isLoadedBateauxRoutes,
      }}
    >
      {children}
    </ContextRoutes.Provider>
  )
}

RoutesProvider.propTypes = {
  children: PropTypes.any,
}