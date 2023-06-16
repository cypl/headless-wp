import axios from 'axios'
import { useState } from 'react'

const ENV = 'http://localhost:8888/headless-wp'
const pagesRoutes = `${ENV}/wp-json/custom-api/v1/pages-routes`
const postsRoutes = `${ENV}/wp-json/custom-api/v1/posts-routes`
const bateauxRoutes = `${ENV}/wp-json/custom-api/v1/bateaux-routes`

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