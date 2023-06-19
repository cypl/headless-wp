import './App.css'
import Router from './Router'
import { RoutesProvider } from './context/ContextRoutes'
import { MenusProvider } from './context/ContextMenus'

function App() {

  return (
    <>
      <RoutesProvider>
        <MenusProvider>
          <Router/>
        </MenusProvider>
      </RoutesProvider>
    </>
  )
}


export default App
