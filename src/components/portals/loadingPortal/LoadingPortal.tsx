import ReactDOM from "react-dom";
import {Loader} from "../../index.ts";
import {PortalWrapper} from "../portalWrapper/PortalWrapper.tsx";
import useConfiguratorStore from "../../../store/configuratorStore.ts";

const LoadingPortal = () => {
  const {isLoading: isConfiguratorLoading} = useConfiguratorStore()
  
  if (!isConfiguratorLoading) return null
  
  return ReactDOM.createPortal(
    <PortalWrapper>
      <Loader/>
    </PortalWrapper>,
    document.getElementById('loader-portal')!
  )
}

export default LoadingPortal
