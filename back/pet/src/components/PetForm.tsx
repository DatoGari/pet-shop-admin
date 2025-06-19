// src/components/PetForm.tsx
import { useState } from 'react';
import styled from 'styled-components';
import type { Pet } from '../redux/petsSlice';

const Form = styled.form`
  max-width: 500px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

interface PetFormProps {
  onSubmit: (data: Omit<Pet, 'id'>) => void;
}

export default function PetForm({ onSubmit }: PetFormProps) {
  const [formData, setFormData] = useState<Omit<Pet, 'id'>>({
    name: '',
    category: '',
    // priceUSD: 0,
    priceGEL: 0,
    description: '',
    stock: 0,
    isPopular: false,
  });

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value, type, checked } = e.target;
  //   setFormData(prev => ({
  //     ...prev,
  //     [name]: type === 'checkbox' ? checked : type === 'number' ? Number(value) : value,
  //   }));
  // };

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
) => {
  const { name, value, type } = e.target;

  const isCheckbox = type === 'checkbox';
  const parsedValue = isCheckbox
    ? (e.target as HTMLInputElement).checked
    : type === 'number'
      ? Number(value)
      : value;

  setFormData(prev => ({
    ...prev,
    [name]: parsedValue,
  }));
};



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      category: '',
      // priceUSD: 0,
      priceGEL: 0,
      description: '',
      stock: 0,
      isPopular: false,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Add New Pet</h2>

      <label>
        Name:
        <input name="name" value={formData.name} onChange={handleChange} required />
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Dogs">Dogs</option>
          <option value="Cats">Cats</option>
          <option value="Birds">Birds</option>
          <option value="Fish">Fish</option>
        </select>
      </label>

      {/* <label>
        Price USD:
        <input type="number" name="priceUSD" value={formData.priceUSD} onChange={handleChange} required />
      </label> */}

      <label>
        Price GEL:
        <input type="number" name="priceGEL" value={formData.priceGEL} onChange={handleChange} required />
      </label>

      <label>
        Stock:
        <input type="number" name="stock" value={formData.stock} onChange={handleChange} required />
      </label>

      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} required />
      </label>

      <label>
        <input type="checkbox" name="isPopular" checked={formData.isPopular} onChange={handleChange} />
        Popular Pet
      </label>

      <button type="submit">Save Pet</button>
    </Form>
  );
}
