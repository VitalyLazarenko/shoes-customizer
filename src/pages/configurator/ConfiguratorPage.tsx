import classNames from 'classnames'
import styles from './styles.module.scss'
import useConfiguratorStore from "../../store/configuratorStore.ts";
import ModelViewer from "../../components/3D/modelViewer/ModelViewer.tsx";
import {Sidebar} from "../../components";
import {SideArrowIcon} from "../../components/icons";
export const ConfiguratorPage = () => {
  const {
    isShowSidebar,
    setIsShowSidebar,
  } = useConfiguratorStore()
  
  return (
    <div className={styles.configuratorPageWrapper}>
      <div className={styles.contentPageWrapper}>
        <div className={classNames(styles.viewerSide, isShowSidebar ? styles.openedSidebar : styles.closedSidebar)}>
          <ModelViewer />
        </div>
        <div className={classNames(styles.settingsSide, isShowSidebar ? styles.open : styles.close)}>
          <div className={classNames(styles.content, isShowSidebar ? styles.show : styles.hide)}>
            <Sidebar/>
          </div>
          <div className={classNames(styles.closeBtn, !isShowSidebar && styles.rotateBtn)} onClick={() => setIsShowSidebar(!isShowSidebar)}>
            <SideArrowIcon/>
          </div>
        </div>
      </div>
    </div>
  )
}
