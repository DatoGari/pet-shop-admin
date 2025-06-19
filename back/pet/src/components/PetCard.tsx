// src/components/PetCard.tsx
import styled from 'styled-components';
import type { Pet } from '../redux/petsSlice';

const Card = styled.div`
  width: 240px;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const Title = styled.h3`
  margin: 0;
  color: #333;
`;

const Category = styled.span`
  font-size: 0.9rem;
  color: #888;
`;

const Price = styled.p`
  font-weight: bold;
  color: #555;
`;

const Stock = styled.p<{ $stock: number }>`
  font-size: 0.9rem;
  color: ${props => (props.$stock === 0 ? 'red' : '#2e7d32')};
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const Popular = styled.strong`
  display: inline-block;
  margin: 0.5rem 0;
  color: #e65100;
`;

export default function PetCard({ pet }: { pet: Pet }) {
  return (
    <Card>
      <Title>{pet.name}</Title>
      <Category>{pet.category}</Category>
      <Price> ₾{pet.priceGEL}</Price>
      <Stock $stock={pet.stock}>Stock: {pet.stock}</Stock>
      {pet.isPopular && <Popular>🔥 Popular</Popular>}
      <Description>{pet.description.slice(0, 60)}...</Description>
    </Card>
  );
}
