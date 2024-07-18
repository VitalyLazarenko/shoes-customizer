import './App.css'
import {Route, Routes} from 'react-router'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import {LoadingPortal} from "./components/portals"
import {ConfiguratorPage} from "./pages/configurator/ConfiguratorPage.tsx"

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<ConfiguratorPage/>}/>
      </Routes>
      
      <ToastContainer
        theme="dark"
        position="bottom-center"
        autoClose={3000}
      />
      <LoadingPortal/>
    </>
  )
}

export default App
