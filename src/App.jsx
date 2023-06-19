import './App.css'
import Router from './Router'
import { RoutesProvider } from './context/ContextRoutes'

function App() {

  return (
    <>
      <RoutesProvider>
        <Router/>
      </RoutesProvider>
    </>
  )
}


export default App
