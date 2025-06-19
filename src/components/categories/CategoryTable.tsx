import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import type { Category } from "../../features/categories/CategoryTypes";
import type { RootState } from "../../redux/Store"
import { deleteCategory } from "../../features/categories/categoriesSlice";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #f0f0f0;
  padding: 0.5rem;
`;

const Td = styled.td`
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
`;

const Button = styled.button`
  margin-right: 0.5rem;
  padding: 0.3rem 0.6rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;

  &.edit {
    background-color: #27ae60;
    color: white;
  }

  &.delete {
    background-color: #e74c3c;
    color: white;
  }
`;

interface Props {
  onEdit: (category: Category) => void;
}

const CategoryTable: React.FC<Props> = ({ onEdit }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.categories.categories);

  return (
    <Table>
      <thead>
        <tr>
          <Th>Title</Th>
          <Th>Description</Th>
          <Th>Actions</Th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <tr key={category.id}>
            <Td>{category.title}</Td>
            <Td>{category.description}</Td>
            <Td>
              <Button className="edit" onClick={() => onEdit(category)}>Edit</Button>
              <Button className="delete" onClick={() => dispatch(deleteCategory(category.id))}>Delete</Button>
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CategoryTable;