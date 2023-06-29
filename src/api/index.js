import axios from 'axios'
import { useState, useEffect } from 'react'

const ENV = 'http://localhost:8888/headless-wp'
const pagesRoutes = `${ENV}/wp-json/custom-api/v1/pages-routes`
const postsRoutes = `${ENV}/wp-json/custom-api/v1/posts-routes`
const bateauxRoutes = `${ENV}/wp-json/custom-api/v1/bateaux-routes`
const menus = `${ENV}/wp-json/custom-api/v1/menus`
const siteInfos = `${ENV}/wp-json/custom-api/v1/site-infos`
const acfCustomisationOptions = `${ENV}/wp-json/custom-api/v1/options/all`

const useFetchData = (path) => {
    const [data, setData] = useState({})
    const [isLoaded, setLoaded] = useState(false)
    const [isError, setError] = useState()

    useEffect(() => {
        async function FetchData(path) {
            setLoaded(false)
            try {
                const response = await axios.get(path)
                setData(response.data)
                setError(null)
                setLoaded(true)
            } catch (error) {
                setError(error.response.status)
                setLoaded(true)
            }
        }
        FetchData(path)
    }, [path])

    // Possibilité d'utiliser une classe de modélisation ici

    return {data, isLoaded, isError}

}

export const API = {
    GetPagesRoutes: () => {
      return useFetchData(pagesRoutes)
    },
    GetPostsRoutes: () => {
        return useFetchData(postsRoutes)
    },
    GetBateauxRoutes: () => {
        return useFetchData(bateauxRoutes)
    },
    GetMenus: () => {
        return useFetchData(menus)
    },
    GetSiteInfos: () => {
        return useFetchData(siteInfos)
    },
    GetAcfCustomisation: () => {
        return useFetchData(acfCustomisationOptions)
    },
}



export function useFetchMenus() {
    const [dataMenus, setDataMenus] = useState({})
    const [isLoadedMenus, setLoadedMenus] = useState(false)
    const [isErrorMenus, setErrormenus] = useState()
  
    async function FetchMenus() {
        setLoadedMenus(false)
        try {
            const response = await axios.get(menus)
            setDataMenus(response.data)
            setErrormenus(null)
            setLoadedMenus(true)
        } catch (error) {
            setErrormenus(error.response)
            setLoadedMenus(true)
        }
    }
  
    return { FetchMenus, dataMenus, isLoadedMenus, isErrorMenus }
}

export function useFetchSiteInfos() {
    const [dataSiteInfos, setDataSiteInfos] = useState({})
    const [isLoadedSiteInfos, setLoadedSiteInfos] = useState(false)
    const [isErrorSiteInfos, setErrorSiteInfos] = useState()
  
    async function FetchSiteInfos() {
        setLoadedSiteInfos(false)
        try {
            const response = await axios.get(siteInfos)
            setDataSiteInfos(response.data)
            setErrorSiteInfos(null)
            setLoadedSiteInfos(true)
        } catch (error) {
            setErrorSiteInfos(error.response)
            setLoadedSiteInfos(true)
        }
    }
  
    return { FetchSiteInfos, dataSiteInfos, isLoadedSiteInfos, isErrorSiteInfos }
}

export function useFetchAcfCustomisation() {
    const [dataAcfCustomisation, setDataAcfCustomisation] = useState({})
    const [isLoadedAcfCustomisation, setLoadedAcfCustomisation] = useState(false)
    const [isErrorAcfCustomisation, setErrorAcfCustomisation] = useState()
  
    async function FetchAcfCustomisation() {
        setLoadedAcfCustomisation(false)
        try {
            const response = await axios.get(acfCustomisationOptions)
            setDataAcfCustomisation(response.data)
            setErrorAcfCustomisation(null)
            setLoadedAcfCustomisation(true)
        } catch (error) {
            setErrorAcfCustomisation(error.response)
            setLoadedAcfCustomisation(true)
        }
    }
  
    return { FetchAcfCustomisation, dataAcfCustomisation, isLoadedAcfCustomisation, isErrorAcfCustomisation }
}