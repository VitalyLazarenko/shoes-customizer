import {create} from 'zustand'

interface IConfiguratorStore {
  isLoading: boolean;
  isShowSidebar: boolean;
  setIsLoading: (value: boolean) => void;
  setIsShowSidebar: (value: boolean) => void;
}

const useConfiguratorStore = create<IConfiguratorStore>((set) => ({
  isLoading: true,
  isShowSidebar: true,
  setIsLoading: (value) => {
    set({isLoading: value})
  },
  setIsShowSidebar: (value) => {
    set({isShowSidebar: value})
  },
}))

export default useConfiguratorStore
