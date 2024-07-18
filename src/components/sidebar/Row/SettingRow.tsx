import {FC, useState} from "react"
import styles from './styles.module.scss'
import Collapsible from "react-collapsible"
import {RowTrigger} from "./RowTrigger/RowTrigger.tsx"
import classNames from "classnames";
import {Category, Option, SubCategory} from "../../../types/main.ts";
import useConfiguratorStore from "../../../store/configuratorStore.ts";
import {toast} from "react-toastify";

interface ISettingsRow {
  openedByDefault?: boolean;
  category: Category;
}

export const SettingRow: FC<ISettingsRow> = ({openedByDefault = false, category}) => {
  const [isShowRow, setIsShowRow] = useState<boolean>(false)
  
  const {selectedOptions, selectOption} = useConfiguratorStore()
  
  const drawOptions = (subCategoryOptions: SubCategory) => {
    
    const handleSelectOption = (item: Option) => {
      if (subCategoryOptions.title === 'Material') {
        toast.info('Coming soon...')
      }
      selectOption({
        categoryName: category.categoryName,
        materialType: category.materialType,
        materialNames: category.materialNames,
        subCategories: subCategoryOptions.title,
        option: item
      })
    }
    
    const checkSelection = (id: string) => {
      return !!selectedOptions.find(el => el.option.id === id)
    }
    
    return (
      <div className={styles.optionsContainer}>
        {
          subCategoryOptions.options.map(option => (
            <div key={option.id} className={classNames(styles.option, checkSelection(option.id) && styles.active)} onClick={() => handleSelectOption(option)}>
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
            <div key={subCategory.title} className={styles.optionWrapper}>
              <h3>{subCategory.title}</h3>
              {drawOptions(subCategory)}
            </div>
          ))
        }
      </div>
    </Collapsible>
  )
}
