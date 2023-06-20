import { useState, useEffect, createContext } from 'react'
import PropTypes from 'prop-types'
import { useFetchAcfCustomisation } from '../api'

export const ContextAcfOptions = createContext()

export const AcfOptionsProvider = ({ children }) => {

    const { FetchAcfCustomisation, dataAcfCustomisation, isLoadedAcfCustomisation, isErrorAcfCustomisation  } = useFetchAcfCustomisation()
    const [ dataAcfHeader, setDataAcfHeader ] = useState();

    useEffect(() => {
        FetchAcfCustomisation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    // Show fetch errors in console
    useEffect(()=> {
        if (isLoadedAcfCustomisation) {
            if(isErrorAcfCustomisation != null){
                console.log("Error API ACF Options")
                console.log(isErrorAcfCustomisation)
            }
            // Data for Header
            const dataHeader = {
                btnPhone: dataAcfCustomisation.texte_du_bouton_dappel,
                txtPhone: dataAcfCustomisation.numero_de_telephone,
                btnTxt: dataAcfCustomisation.texte_du_bouton_contact,
                btnRoute: "/" + dataAcfCustomisation.url_de_la_page_contact.post_name,
            }
            setDataAcfHeader(dataHeader)
            
            
        }
    }, [dataAcfCustomisation, isErrorAcfCustomisation, isLoadedAcfCustomisation])

  return (
    <ContextAcfOptions.Provider
      value={{
        dataAcfHeader
      }}
    >
      {children}
    </ContextAcfOptions.Provider>
  )
}

AcfOptionsProvider.propTypes = {
  children: PropTypes.any,
}