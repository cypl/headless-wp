import { useState, useEffect, createContext } from 'react'
import PropTypes from 'prop-types'
import { API } from '../api'

export const ContextRoutes = createContext()

export const RoutesProvider = ({ children }) => {

  const pagesRoutes = API.GetPagesRoutes()
  const postsRoutes = API.GetPostsRoutes()
  const bateauxRoutes = API.GetBateauxRoutes()

  const [dataPagesRoutes, setDataPagesRoutes] = useState()
  const [dataPostsRoutes, setDataPostsRoutes] = useState()
  const [dataBateauxRoutes, setDataBateauxRoutes] = useState()
  const [isLoadedPagesRoutes, setIsLoadedPagesRoutes] = useState()
  const [isLoadedPostsRoutes, setIsLoadedPostsRoutes] = useState()
  const [isLoadedBateauxRoutes, setIsLoadedBateauxRoutes] = useState()

  // Show fetch errors in console OR set Data
  useEffect(()=> {
    if (pagesRoutes.isLoaded && postsRoutes.isLoaded && bateauxRoutes.isLoaded) {
        setIsLoadedPagesRoutes(true)
        setIsLoadedPostsRoutes(true)
        setIsLoadedBateauxRoutes(true)
        if(pagesRoutes.isError != null){
          console.log("Error API Routes pages")
          console.log(pagesRoutes.isError)
        } else {
          setDataPagesRoutes(pagesRoutes.data)
        }
        if(postsRoutes.isError != null){
          console.log("Error API Routes posts")
          console.log(postsRoutes.isError)
        } else {
          setDataPostsRoutes(postsRoutes.data)
        }
        if(bateauxRoutes.isError != null){
          console.log("Error API Routes bateaux")
          console.log(bateauxRoutes.isError)
        } else {
          setDataBateauxRoutes(bateauxRoutes.data)
        }
    }
  }, [bateauxRoutes.data, bateauxRoutes.isError, bateauxRoutes.isLoaded, pagesRoutes.data, pagesRoutes.isError, pagesRoutes.isLoaded, postsRoutes.data, postsRoutes.isError, postsRoutes.isLoaded])


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