import React, { useState } from "react";
import CategoryForm from "../components/categories/CategoryForm";
import CategoryTable from "../components/categories/CategoryTable";
import type { Category } from "../features/categories/CategoryTypes";

const CategoriesPage: React.FC = () => {
  const [categoryToEdit, setCategoryToEdit] = useState<Category | undefined>(undefined);

  return (
    <div>
      <h2>Categories</h2>
      <CategoryForm categoryToEdit={categoryToEdit} onFinish={() => setCategoryToEdit(undefined)} />
      <CategoryTable onEdit={(category) => setCategoryToEdit(category)} />
    </div>
  );
};

export default CategoriesPage;