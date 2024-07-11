import {create} from 'zustand'

interface IConfiguratorStore {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

const useConfiguratorStore = create<IConfiguratorStore>((set) => ({
  isLoading: true,
  setIsLoading: (value) => {
    set({isLoading: value})
  }
}))

export default useConfiguratorStore
