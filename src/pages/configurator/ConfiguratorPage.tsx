import classNames from 'classnames'
import styles from './styles.module.scss'
import useConfiguratorStore from "../../store/configuratorStore.ts";
import ModelViewer from "../../components/3D/modelViewer/ModelViewer.tsx";
import {Sidebar} from "../../components";
import {SideArrowIcon} from "../../components/icons";
import {useLocation} from 'react-router-dom';
import {useEffect} from "react";
import {models} from "../../constants/tempData.ts";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const ConfiguratorPage = () => {
  const {
    activeModel,
    isShowSidebar,
    setIsShowSidebar,
    setActiveModel,
  } = useConfiguratorStore()
  
  const query = useQuery();
  const model = query.get('model');
  
  useEffect(() => {
    if (model) {
      if (models[model]) {
        setActiveModel(models[model])
      }
    }
    
    setActiveModel(models['shoes'])
  }, [model])
  
  return (
    <div className={styles.configuratorPageWrapper}>
      <div className={styles.contentPageWrapper}>
        <div className={classNames(styles.viewerSide, isShowSidebar ? styles.openedSidebar : styles.closedSidebar)}>
          <ModelViewer/>
        </div>
        <div className={classNames(styles.settingsSide, isShowSidebar ? styles.open : styles.close)}>
          <div className={classNames(styles.content, isShowSidebar ? styles.show : styles.hide)}>
            <Sidebar categories={activeModel?.categories}/>
          </div>
          <div className={classNames(styles.closeBtn, !isShowSidebar && styles.rotateBtn)}
               onClick={() => setIsShowSidebar(!isShowSidebar)}>
            <SideArrowIcon/>
          </div>
        </div>
      </div>
    </div>
  )
}
