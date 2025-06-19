import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/hooks";
import type { RootState } from "../../redux/Store";
import type { Pet } from "../../features/pets/PetTypes";
import { deletePet } from "../../features/pets/petsSlice";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #f0f0f0;
  padding: 0.5rem;
  text-align: left;
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

interface PetTableProps {
  onEdit: (pet: Pet) => void;
}

const PetTable: React.FC<PetTableProps> = ({ onEdit }) => {
  const dispatch = useAppDispatch();
  const pets = useSelector((state: RootState) => state.pets.pets);
  const categories = useSelector((state: RootState) => state.categories.categories);

  const getCategoryTitle = (id: string) => categories.find(c => c.id === id)?.title || "N/A";

  return (
    <Table>
      <thead>
        <tr>
          <Th>Name</Th>
          <Th>Category</Th>
          <Th>Price</Th>
          <Th>Popular</Th>
          <Th>Stock</Th>
          <Th>Actions</Th>
        </tr>
      </thead>
      <tbody>
        {pets.map((pet) => (
          <tr key={pet.id}>
            <Td>{pet.name}</Td>
            <Td>{getCategoryTitle(pet.categoryId)}</Td>
            <Td>${pet.price}</Td>
            <Td>{pet.isPopular ? "Yes" : "No"}</Td>
            <Td>{pet.stock}</Td>
            <Td>
              <Button className="edit" onClick={() => onEdit(pet)}>Edit</Button>
              <Button className="delete" onClick={() => dispatch(deletePet(pet.id))}>Delete</Button>
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PetTable;