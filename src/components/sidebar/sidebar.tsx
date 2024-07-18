import classNames from "classnames"
import styles from './styles.module.scss'
import {SettingRow} from "./Row/SettingRow.tsx"
import SaveIcon from "../icons/saveIcon.tsx";
import {toast} from "react-toastify";
import {Category} from "../../types/main.ts";
import {FC} from "react";

interface ISidebar {
  categories?: Category[];
}

const Sidebar:FC<ISidebar> = ({categories}) => {
  return (
    <div className={classNames(styles.sidebarWrapper)}>
      <div className={styles.settingsContainer}>
        {
          categories && categories.map(category => (
            <SettingRow key={category.categoryName} category={category} openedByDefault={false}/>
          ))
        }
      </div>
      <div className={styles.saveBtn} onClick={() => toast.info('Coming soon...')}>
        <span>save</span> <SaveIcon/>
      </div>
    </div>
  )
}

export default Sidebar
