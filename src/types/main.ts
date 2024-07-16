export interface Option {
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
  subCategories: SubCategory[];
}

export interface Model {
  modelName: string;
  modelUrl: string;
  lightMode: string;
  categories: Category[];
}

export interface Models {
  [key: string]: Model;
}
