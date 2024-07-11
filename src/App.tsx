import './App.css'
import {Route, Routes} from 'react-router'
import {ConfiguratorPage} from "./pages/configurator/ConfiguratorPage.tsx";
import {LoadingPortal} from "./components/portals";

function App() {
  
  return (
    <>
      <Routes>
        <Route path={'/'} element={<ConfiguratorPage/>}/>
      </Routes>
      
      <LoadingPortal/>
    </>
  )
}

export default App
