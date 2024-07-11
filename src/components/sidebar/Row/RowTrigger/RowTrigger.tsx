import {FC} from "react"
import classNames from "classnames"
import styles from './styles.module.scss'
import {ChevronIcon} from "../../../icons";

interface IRowTrigger {
  title: string,
  isOpened: boolean
}

export const RowTrigger:FC<IRowTrigger> = ({title, isOpened}) => {
  return (
    <div className={classNames(styles.rowTriggerWrapper)}>
      <h2>{title}</h2>
      <div className={styles.line}/>
      <div className={classNames(styles.chevronContainer, isOpened && styles.chevronCollapsed)}>
        <ChevronIcon/>
      </div>
    </div>
  )
}
