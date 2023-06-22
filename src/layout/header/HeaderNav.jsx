import { useContext } from 'react'
import { styled } from 'styled-components'
import { ContextAcfOptions } from '../../context/ContextAcfOptions'
import HeaderNavMenu from './HeaderNavMenu'
import CallToAction from '../../components/CallToAction'

function HeaderNav() {
    const { dataAcfHeader } = useContext(ContextAcfOptions)    
    
    return (
      <>  
        <ContentNavHeader>

            <HeaderNavMenu/>
          
            {dataAcfHeader && dataAcfHeader.showPhone && 
                <CallToAction 
                    text={dataAcfHeader && dataAcfHeader.txtPhone} 
                    type={"phone"} 
                    href={dataAcfHeader && `tel:` + dataAcfHeader.txtPhone}
                    target={"externe"}
                    style={{marginLeft:"10px"}}
                />
            }

            <CallToAction 
                text={dataAcfHeader && dataAcfHeader.btnTxt} 
                type={"primaire"}
                href={dataAcfHeader && dataAcfHeader.btnRoute}
                target={"interne"}
                style={{marginLeft:"10px"}}
            />

        </ContentNavHeader>
      </>
    )
  }
  
  export default HeaderNav


const ContentNavHeader = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 1;
    transition: 0.3s right ease-in-out;
    margin-right: 2rem;
`