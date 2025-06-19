export interface Pet {
  id: string;
  name: string;
  categoryId: string;  // reference to category id
  price: number;
  description: string;
  image: string;
  isPopular: boolean;
  stock: number;
}

export interface PetsState {
  pets: Pet[];
  loading: boolean;
  error: string | null;
}