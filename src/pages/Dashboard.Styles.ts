import styled from "styled-components";

export const DashboardContainer = styled.div`
  padding: 2rem;
`;

export const NavBar = styled.nav`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const NavButton = styled.button`
  padding: 0.5rem 1rem;
  font-weight: bold;
  cursor: pointer;
  background-color: #f3f3f3;
  border: none;
  border-radius: 8px;
  &:hover {
    background-color: #ddd;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;

export const PetCard = styled.div`
  background-color: white;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

export const PetImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
`;

export const PetTitle = styled.h3`
  margin: 0.5rem 0 0.2rem;
`;

export const PetCategory = styled.p`
  font-size: 0.9rem;
  color: gray;
`;

export const PetPrice = styled.p`
  font-weight: bold;
`;