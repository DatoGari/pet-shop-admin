import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PetsPage from "./pages/PetsPage";
import CategoriesPage from "./pages/CategoriesPage";
import { Nav, NavLink, Container } from "./App.Styles"


const App: React.FC = () => {
  return (
    <Router>
      <Nav>
        <NavLink to="/pets">Pets</NavLink>
        <NavLink to="/categories">Categories</NavLink>
      </Nav>

      <Container>
        <Routes>
          <Route path="/" element={<Navigate to="/pets" replace />} />
          <Route path="/pets" element={<PetsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
