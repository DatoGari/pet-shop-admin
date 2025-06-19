import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store';
import { addPet } from '../redux/petsSlice';
import type { Pet } from '../redux/petsSlice';
import PetForm from '../components/PetForm';
import { useNavigate } from 'react-router-dom';

export default function AddPetPage() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = (data: Omit<Pet, 'id'>) => {
    dispatch(addPet(data)).then(() => {
      navigate('/pet-list');
    });
  };

  return <PetForm onSubmit={handleSubmit} />;
}
