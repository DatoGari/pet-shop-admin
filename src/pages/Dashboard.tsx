import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { NavBar, NavButton, DashboardContainer, CardGrid, PetCard, PetCategory, PetImage, PetPrice, PetTitle } from "./Dashboard.Styles";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const pets = useSelector((state: RootState) => state.pets.pets);
  const categories = useSelector((state: RootState) => state.categories.categories);

  const getCategoryName = (categoryId: string) => {
    return categories.find((c) => c.id === categoryId)?.title || "Uncategorized";
  };

  return (
    <DashboardContainer>
      <NavBar>
        <NavButton onClick={() => navigate("/pets")}>Pets</NavButton>
        <NavButton onClick={() => navigate("/categories")}>Categories</NavButton>
      </NavBar>

      <CardGrid>
        {pets.map((pet) => (
          <PetCard key={pet.id}>
            <PetImage src={pet.image} alt={pet.name} />
            <PetTitle>{pet.name}</PetTitle>
            <PetCategory>{getCategoryName(pet.categoryId)}</PetCategory>
            <PetPrice>${pet.price}</PetPrice>
          </PetCard>
        ))}
      </CardGrid>
    </DashboardContainer>
  );
};

export default Dashboard;