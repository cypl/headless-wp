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
                logo: dataAcfCustomisation.importer_le_logo,
                logoSizeTop: dataAcfCustomisation.dimensions_logo.dimensions_logo_normal,
                logoSizeScroll: dataAcfCustomisation.dimensions_logo.dimensions_logo_scroll,
                btnPhone: dataAcfCustomisation.texte_du_bouton_dappel,
                txtPhone: dataAcfCustomisation.numero_de_telephone,
                showPhone: dataAcfCustomisation.afficher_le_bouton_dappel_dans_le_header,
                btnTxt: dataAcfCustomisation.texte_du_bouton_contact,
                btnRoute: "/" + dataAcfCustomisation.url_de_la_page_contact.post_name,
                showBurgerMenuDesktop: dataAcfCustomisation.laisser_le_menu_mobile_disponible_sur_la_version_desktop,
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