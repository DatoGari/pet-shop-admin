import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Pet, PetsState } from './PetTypes';
import type { PayloadAction } from "@reduxjs/toolkit";
import api from "../../api/axios";

const initialState: PetsState = {
  pets: [],
  loading: false,
  error: null
};

// Get all pets
export const fetchPets = createAsyncThunk("pets/fetchPets", async () => {
  const response = await api.get("/pets");
  return response.data;
});

// Add a new pet
export const addPet = createAsyncThunk("pets/addPet", async (pet: Omit<Pet, "id">) => {
  const response = await api.post("/pets", pet);
  return response.data;
});

// Update an existing pet
export const updatePet = createAsyncThunk(
  "pets/updatePet",
  async (pet: Pet) => {
    const response = await api.put(`/pets/${pet.id}`, pet);
    return response.data;
  }
);

// Delete a pet
export const deletePet = createAsyncThunk(
  "pets/deletePet",
  async (id: string) => {
    await api.delete(`/pets/${id}`);
    return id; // we return the id so we can remove it from the store
  }
);

const petsSlice = createSlice({
  name: "pets",
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
        state.error = action.error.message || "Failed to load pets";
      })
      .addCase(addPet.fulfilled, (state, action: PayloadAction<Pet>) => {
        state.pets.push(action.payload);
      })
      .addCase(updatePet.fulfilled, (state, action: PayloadAction<Pet>) => {
       const index = state.pets.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.pets[index] = action.payload;
      }
      })
      .addCase(deletePet.fulfilled, (state, action: PayloadAction<string>) => {
      state.pets = state.pets.filter(pet => pet.id !== action.payload);
      });

  },
});

export default petsSlice.reducer;
