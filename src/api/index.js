import axios from 'axios'
import { useState } from 'react'

const ENV = 'http://localhost:8888/headless-wp'
const pagesRoutes = `${ENV}/wp-json/custom-api/v1/pages-routes`
const postsRoutes = `${ENV}/wp-json/custom-api/v1/posts-routes`
const bateauxRoutes = `${ENV}/wp-json/custom-api/v1/bateaux-routes`
const menus = `${ENV}/wp-json/custom-api/v1/menus`
const siteInfos = `${ENV}/wp-json/custom-api/v1/site-infos`
const acfCustomisationOptions = `${ENV}/wp-json/custom-api/v1/options/all`

export function useFetchPagesRoutes() {
    const [dataPagesRoutes, setDataPagesRoutes] = useState({})
    const [isLoadedPagesRoutes, setLoadedPagesRoutes] = useState(false)
    const [isErrorPagesRoutes, setErrorPagesRoutes] = useState()
  
    async function FetchPagesRoutes() {
        setLoadedPagesRoutes(false)
        try {
            const response = await axios.get(pagesRoutes)
            setDataPagesRoutes(response.data)
            setErrorPagesRoutes(null)
            setLoadedPagesRoutes(true)
        } catch (error) {
            setErrorPagesRoutes(error.response)
            setLoadedPagesRoutes(true)
        }
    }
  
    return { FetchPagesRoutes, dataPagesRoutes, isLoadedPagesRoutes, isErrorPagesRoutes }
}

export function useFetchPostsRoutes() {
    const [dataPostsRoutes, setDataPostsRoutes] = useState({})
    const [isLoadedPostsRoutes, setLoadedPostsRoutes] = useState(false)
    const [isErrorPostsRoutes, setErrorPostsRoutes] = useState()
  
    async function FetchPostsRoutes() {
        setLoadedPostsRoutes(false)
        try {
            const response = await axios.get(postsRoutes)
            setDataPostsRoutes(response.data)
            setErrorPostsRoutes(null)
            setLoadedPostsRoutes(true)
        } catch (error) {
            setErrorPostsRoutes(error.response)
            setLoadedPostsRoutes(true)
        }
    }
  
    return { FetchPostsRoutes, dataPostsRoutes, isLoadedPostsRoutes, isErrorPostsRoutes }
}

export function useFetchBateauxRoutes() {
    const [dataBateauxRoutes, setDataBateauxRoutes] = useState({})
    const [isLoadedBateauxRoutes, setLoadedBateauxRoutes] = useState(false)
    const [isErrorBateauxRoutes, setErrorPostsRoutes] = useState()
  
    async function FetchBateauxRoutes() {
        setLoadedBateauxRoutes(false)
        try {
            const response = await axios.get(bateauxRoutes)
            setDataBateauxRoutes(response.data)
            setErrorPostsRoutes(null)
            setLoadedBateauxRoutes(true)
        } catch (error) {
            setErrorPostsRoutes(error.response)
            setLoadedBateauxRoutes(true)
        }
    }
  
    return { FetchBateauxRoutes, dataBateauxRoutes, isLoadedBateauxRoutes, isErrorBateauxRoutes }
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