export interface Option {
  id: string;
  isActive: boolean;
  isColorPreview: boolean;
  color: string;
  preview: string;
  title: string;
}

export interface SubCategory {
  title: string;
  options: Option[];
}

export interface Category {
  categoryName: string;
  materialType: string;
  materialNames: string[];
  openedByDefault: boolean;
  subCategories: SubCategory[];
}

export interface ISelectedCategories {
  categoryName: string,
  materialType: string,
  materialNames: string[],
  subCategories: string,
  option: Option
}

export interface Model {
  modelName: string;
  modelUrl: string;
  lightMode: string;
  modelPosition?: number[],
  modelRotation?: number[],
  categories: Category[];
}

export interface Models {
  [key: string]: Model;
}
