import classNames from "classnames"
import styles from './styles.module.scss'
import {SettingRow} from "./Row/SettingRow.tsx"
import SaveIcon from "../icons/saveIcon.tsx";
import {toast} from "react-toastify";
const Sidebar = () => {
  return (
    <div className={classNames(styles.sidebarWrapper)}>
      <div className={styles.settingsContainer}>
        <SettingRow openedByDefault={true}/>
        <SettingRow/>
        <SettingRow/>
        <SettingRow/>
      </div>
      <div className={styles.saveBtn} onClick={() => toast.info('Coming soon...')}>
        <span>save</span> <SaveIcon/>
      </div>
    </div>
  )
}

export default Sidebar
