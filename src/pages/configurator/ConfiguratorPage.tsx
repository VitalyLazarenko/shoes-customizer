import {useMemo} from "react";
import classNames from 'classnames'
import styles from './styles.module.scss'
import useConfiguratorStore from "../../store/configuratorStore.ts";
import ModelViewer from "../../components/3D/modelViewer/ModelViewer.tsx";
export const ConfiguratorPage = () => {
  const {
    isShowSidebar,
    setIsLoading,
  } = useConfiguratorStore()
  
  useMemo(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])
  
  return (
    <div className={styles.configuratorPageWrapper}>
      <div className={styles.contentPageWrapper}>
        <div className={classNames(styles.viewerSide, isShowSidebar ? styles.openedSidebar : styles.closedSidebar)}>
          <ModelViewer />
        </div>
        <div className={classNames(styles.settingsSide, isShowSidebar ? styles.open : styles.close)}>
          <div className={classNames(styles.content, isShowSidebar ? styles.show : styles.hide)}>
            Sidebar with settings coming soon...
          </div>
        </div>
      </div>
    </div>
  )
}
