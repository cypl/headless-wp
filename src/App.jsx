import './App.css'
import Header from './layout/Header'
import Router from './Router'
import { RoutesProvider } from './context/ContextRoutes'
import { MenusProvider } from './context/ContextMenus'

function App() {

  return (
    <>
      <RoutesProvider>
        <MenusProvider>
          <Header />
          <Router/>
        </MenusProvider>
      </RoutesProvider>
    </>
  )
}


export default App
