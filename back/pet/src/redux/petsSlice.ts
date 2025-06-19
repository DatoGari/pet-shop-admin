import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
// import type { JSX } from 'react/jsx-runtime';

export interface Pet {
  id: string;
  name: string;
  category: string;
  // priceUSD: number;
  priceGEL: number;
  description: string;
  isPopular: boolean;
  stock: number;
}

interface PetsState {
  // map(arg0: (pet: Pet) => JSX.Element): import("react").ReactNode;
  // items: any;
  pets: Pet[];
  loading: boolean;
  error: string | null;
}

const initialState: PetsState = {
  pets: [],
  loading: false,
  error: null,
};

const API_URL = 'http://localhost:3001/pets';

export const fetchPets = createAsyncThunk('pets/fetchPets', async () => {
  const response = await axios.get<Pet[]>(API_URL);
  return response.data;
});

export const addPet = createAsyncThunk('pets/addPet', async (pet: Omit<Pet, 'id'>) => {
  const response = await axios.post<Pet>(API_URL, pet);
  return response.data;
});

const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPets.fulfilled, (state, action: PayloadAction<Pet[]>) => {
        state.loading = false;
        state.pets = action.payload;
      })
      .addCase(fetchPets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch pets';
      })
      .addCase(addPet.fulfilled, (state, action: PayloadAction<Pet>) => {
        state.pets.push(action.payload);
      });
  },
});

export default petsSlice.reducer;
