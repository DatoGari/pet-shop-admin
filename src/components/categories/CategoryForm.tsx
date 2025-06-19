import React, { useEffect, useState } from "react";
import type { Category } from "../../features/categories/CategoryTypes";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addCategory, updateCategory } from "../../features/categories/categoriesSlice";
import { Form, Label, Input, Button} from "./CategoryForm.Styles"

interface Props {
  categoryToEdit?: Category;
  onFinish?: () => void;
}

const CategoryForm: React.FC<Props> = ({ categoryToEdit, onFinish }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<Category>({
    id: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    if (categoryToEdit) setFormData(categoryToEdit);
  }, [categoryToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.id) {
      dispatch(updateCategory(formData));
    } else {
      dispatch(addCategory({ ...formData, id: uuidv4() }));
    }
    onFinish?.();
    setFormData({ id: "", title: "", description: "" });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Title</Label>
      <Input name="title" value={formData.title} onChange={handleChange} required />

      <Label>Description</Label>
      <Input name="description" value={formData.description} onChange={handleChange} />

      <Button type="submit">{formData.id ? "Update" : "Add"} Category</Button>
    </Form>
  );
};

export default CategoryForm;