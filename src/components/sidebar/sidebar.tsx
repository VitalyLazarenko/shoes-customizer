import {FC} from "react";
import classNames from "classnames"
import {toast} from "react-toastify";
import styles from './styles.module.scss'
import SaveIcon from "../icons/saveIcon.tsx";
import {SettingRow} from "./Row/SettingRow.tsx"
import {Category} from "../../types/types.ts";

interface ISidebar {
  categories?: Category[];
}

const Sidebar:FC<ISidebar> = ({categories}) => {
  return (
    <div className={classNames(styles.sidebarWrapper)}>
      <div className={styles.settingsContainer}>
        {
          categories && categories.map(category => (
            <SettingRow key={category.categoryName} category={category} openedByDefault={category.openedByDefault}/>
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
