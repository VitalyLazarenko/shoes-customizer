import styles from './styles.module.scss'
import useConfiguratorStore from "../../store/configuratorStore.ts";
import {useMemo} from "react";
import ModelViewer from "../../components/3D/modelViewer/ModelViewer.tsx";
export const ConfiguratorPage = () => {
  const {setIsLoading} = useConfiguratorStore()
  
  useMemo(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])
  
  return (
    <div className={styles.configuratorPageWrapper}>
      <div className={styles.contentPageWrapper}>
        <div className={styles.viewerSide}>
          <ModelViewer/>
        </div>
        <div className={styles.settingsSide}>
          Sidebar with settings coming soon...
        </div>
      </div>
    </div>
  )
}
