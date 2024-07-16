import {FC, useState} from "react"
import styles from './styles.module.scss'
import Collapsible from "react-collapsible"
import {RowTrigger} from "./RowTrigger/RowTrigger.tsx"
import classNames from "classnames";
import {Category, Option} from "../../../types/main.ts";

interface ISettingsRow {
  openedByDefault?: boolean;
  category: Category;
}

export const SettingRow: FC<ISettingsRow> = ({openedByDefault = false, category}) => {
  const [isShowRow, setIsShowRow] = useState<boolean>(false)
  
  const drawOptions = (options: Option[]) => {
    return (
      <div className={styles.optionsContainer}>
        {
          options.map(option => (
            <div className={classNames(styles.option, false && styles.active)}>
              {
                option.isColorPreview ?
                  <div className={styles.preview} style={{background: option.color}}/> :
                  <div className={styles.preview} style={{background: `url(${option.preview})`}}/>
              }
              <div className={styles.title}>
                {option.title}
              </div>
            </div>
          ))
        }
      </div>
    )
  }
  
  return (
    <Collapsible
      open={openedByDefault}
      trigger={<RowTrigger title={category.categoryName} isOpened={isShowRow}/>}
      onOpen={() => setIsShowRow(true)}
      onClose={() => setIsShowRow(false)}
    >
      <div className={styles.bodyContainer}>
        {
          category.subCategories.map(subCategory => (
            <div className={styles.optionWrapper}>
              <h3>{subCategory.title}</h3>
              {drawOptions(subCategory.options)}
            </div>
          ))
        }
      </div>
    </Collapsible>
  )
}
