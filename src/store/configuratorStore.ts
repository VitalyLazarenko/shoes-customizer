import {create} from 'zustand'
import {ISelectedCategories, Model} from "../types/main.ts";

interface IConfiguratorStore {
  isLoading: boolean;
  isShowSidebar: boolean;
  activeModel: Model | null;
  selectedOptions: ISelectedCategories[];
  setIsLoading: (value: boolean) => void;
  setIsShowSidebar: (value: boolean) => void;
  setActiveModel: (value: Model | null) => void;
  selectOption: (value: ISelectedCategories) => void;
  clearSelectionOptions: () => void
}

const useConfiguratorStore = create<IConfiguratorStore>((set) => ({
  isLoading: true,
  activeModel: null,
  isShowSidebar: true,
  selectedOptions: [],
  setIsLoading: (value) => {
    set({isLoading: value})
  },
  setIsShowSidebar: (value) => {
    set({isShowSidebar: value})
  },
  setActiveModel: (value) => {
    set({activeModel: value})
  },
  selectOption: (value) => {
    set((state) => {
      const selections = state.selectedOptions.filter(el => (el.categoryName !== value.categoryName) || (el.categoryName === value.categoryName && el.subCategories !== value.subCategories))
      if (state.selectedOptions.find(el => el.option.id === value.option.id)) {
        return ({
          selectedOptions: [...selections]
        })
      } else {
        return ({
          selectedOptions: [...selections, value]
        })
      }
    })
  },
  clearSelectionOptions: () => {
    set({selectedOptions: []})
  },
}))

export default useConfiguratorStore
