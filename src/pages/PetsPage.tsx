import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchPets } from "../features/pets/petsSlice";
import PetForm from "../components/pets/PetForm";
import PetTable from "../components/pets/PetTable";
import type { Pet } from "../features/pets/PetTypes";

// const PetsPage: React.FC = () => {
//   const [petToEdit, setPetToEdit] = useState<Pet | undefined>(undefined);

//   return (
//     <div>
//       <h2>Pets</h2>
//       <PetForm petToEdit={petToEdit} onFinish={() => setPetToEdit(undefined)} />
//       <PetTable onEdit={(pet) => setPetToEdit(pet)} />
//     </div>
//   );
// };

const PetsPage: React.FC = () => {
  const [petToEdit, setPetToEdit] = useState<Pet | undefined>(undefined);
  const dispatch = useAppDispatch();
  const { pets, loading, error } = useAppSelector((state) => state.pets);

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return (
    <div>
      <h2>Pets</h2>
      <PetForm petToEdit={petToEdit} onFinish={() => setPetToEdit(undefined)} />
      <PetTable onEdit={(pet) => setPetToEdit(pet)} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {pets.map((pet: { id: React.Key | null | undefined; name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => (
        <div key={pet.id}>{pet.name}</div>
      ))}
    </div>
  );
};

export default PetsPage;
