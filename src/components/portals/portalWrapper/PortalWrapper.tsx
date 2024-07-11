import {FC, ReactNode} from "react";
import styles from './styles.module.scss'
import useConfiguratorStore from "../../../store/configuratorStore.ts";
interface IPortalWrapper {
  children: ReactNode
}
export const PortalWrapper:FC<IPortalWrapper> = ({children}) => {
  const {setIsLoading} = useConfiguratorStore()
  return (
    <div className={styles.portalWrapper} onClick={() => setIsLoading(false)}>
      <div className={styles.contentWrapper}>
        {children}
      </div>
    </div>
  )
}
