import {FC, useState} from "react"
import styles from './styles.module.scss'
import Collapsible from "react-collapsible"
import {RowTrigger} from "./RowTrigger/RowTrigger.tsx"
import classNames from "classnames";

interface ISettingsRow {
  openedByDefault?: boolean;
}

export const SettingRow:FC<ISettingsRow> = ({openedByDefault = false}) => {
  const [isShowRow, setIsShowRow] = useState<boolean>(false)
  return (
    <Collapsible
      open={openedByDefault}
      trigger={<RowTrigger title={'TEST TEST'} isOpened={isShowRow}/>}
      onOpen={() => setIsShowRow(true)}
      onClose={() => setIsShowRow(false)}
    >
      <div className={styles.bodyContainer}>
        <div className={styles.optionWrapper}>
          <h3>Material</h3>
          <div className={styles.optionsContainer}>
            <div className={classNames(styles.option, false && styles.active)}>
              <div className={styles.preview} style={{background: 'url(/materials/fabric_1.png)'}}/>
              <div className={styles.title}>
                Leather
              </div>
            </div>
            <div className={classNames(styles.option, styles.active)}>
              <div className={styles.preview} style={{background: 'url(/materials/fabric_1.png)'}}/>
              <div className={styles.title}>
                Leather
              </div>
            </div>
          </div>
        </div>
        <div className={styles.optionWrapper}>
          <h3>Color</h3>
          <div className={styles.optionsContainer}>
            <div className={classNames(styles.option, false && styles.active)}>
              <div className={styles.preview} style={{background: '#8B88FD'}}/>
              <div className={styles.title}>
              </div>
            </div>
            <div className={classNames(styles.option, styles.active)}>
              <div className={styles.preview} style={{background: '#B8EB63'}}/>
              <div className={styles.title}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Collapsible>
  )
}
