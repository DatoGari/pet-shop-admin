export interface Category {
  id: string;
  title: string;
  description: string;
}

export interface CategoriesState {
  categories: Category[];
  loading: boolean;
  error: string | null
}