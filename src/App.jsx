import './styles/App.css'
import Router from './Router'
import { RoutesProvider } from './context/ContextRoutes'
import { SiteInfosProvider } from './context/ContextSiteInfos'

function App() {

  return (
    <>
      <RoutesProvider>
        <SiteInfosProvider>
          <Router/>
        </SiteInfosProvider>
      </RoutesProvider>
    </>
  )
}


export default App
