import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/hooks";
import type { Pet } from "../../features/pets/PetTypes";
import type { RootState } from "../../redux/Store";
import { addPet, updatePet } from "../../features/pets/petsSlice";
import { Form, Input, Select, Label, Button} from "./PetForm.Styles"


interface PetFormProps {
  petToEdit?: Pet;
  onFinish?: () => void;
}

const PetForm: React.FC<PetFormProps> = ({ petToEdit, onFinish }) => {
  const dispatch = useAppDispatch();
  const categories = useSelector((state: RootState) => state.categories.categories);

  const [formData, setFormData] = useState<Pet>(
    petToEdit || {
      id: "",
      name: "",
      categoryId: "",
      price: 0,
      description: "",
      image: "",
      isPopular: false,
      stock: 0,
    }
  );

  useEffect(() => {
    if (petToEdit) {
      setFormData(petToEdit);
    }
  }, [petToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.id) {
      dispatch(updatePet(formData));
    } else {
      dispatch(addPet(formData));
    }
    if (onFinish) onFinish();
    setFormData({
      id: "",
      name: "",
      categoryId: "",
      price: 0,
      description: "",
      image: "",
      isPopular: false,
      stock: 0,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Name:</Label>
      <Input name="name" value={formData.name} onChange={handleChange} required />

      <Label>Category:</Label>
      <Select name="categoryId" value={formData.categoryId} onChange={handleChange} required>
        <option value="">Select category</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>{cat.title}</option>
        ))}
      </Select>

      <Label>Price:</Label>
      <Input type="number" name="price" value={formData.price} onChange={handleChange} required />

      <Label>Description:</Label>
      <Input name="description" value={formData.description} onChange={handleChange} />

      <Label>Image URL:</Label>
      <Input name="image" value={formData.image} onChange={handleChange} />

      <Label>Stock:</Label>
      <Input type="number" name="stock" value={formData.stock} onChange={handleChange} />

      <Label>
        <input
          type="checkbox"
          name="isPopular"
          checked={formData.isPopular}
          onChange={handleChange}
        /> Popular?
      </Label>

      <Button type="submit">{formData.id ? "Update" : "Add"} Pet</Button>
    </Form>
  );
};

export default PetForm;
