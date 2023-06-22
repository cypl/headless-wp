import Router from './Router'
import { RoutesProvider } from './context/ContextRoutes'
import { SiteInfosProvider } from './context/ContextSiteInfos'
import { AcfOptionsProvider } from './context/ContextAcfOptions'
import { styled, createGlobalStyle } from 'styled-components';
import { colors } from './utils/theme'

function App() {

  return (
    <SiteWrapper>
      <GlobalStyle />
      <RoutesProvider>
        <SiteInfosProvider>
          <AcfOptionsProvider>
            <Router/>
          </AcfOptionsProvider>
        </SiteInfosProvider>
      </RoutesProvider>
    </SiteWrapper>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${colors.primaire};
    color: ${colors.gris};
  }
`;
const SiteWrapper = styled.div`
  & mark {
    background: transparent;
    color: ${colors.gris};
  }
  & ::selection {
    background: ${colors.primaire};
    color: ${colors.clair};
  }
  & :focus {
    // outline: 2px solid ${colors.primaire1};
    outline: none;
  }
`
