import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../redux/store';
import { fetchPets } from '../redux/petsSlice';
import PetCard from '../components/PetCard';
import styled from 'styled-components';
import type { Pet } from '../redux/petsSlice';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
  padding: 2rem;
`;

export default function PetListPage() {
  const dispatch = useDispatch<AppDispatch>();
  const pets = useSelector((state: RootState) => state.pets.pets);

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return (
    <Grid>
      {pets.map((pet: Pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </Grid>
  );
}
