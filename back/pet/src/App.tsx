import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddPetPage from './pages/AddPetPage';
import PetListPage from './pages/PetListPage';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #2196f3;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  a {
    color: white;
    text-decoration: none;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Nav>
        <Link to="/">Pet List</Link>
        <Link to="/add">Add Pet</Link>
      </Nav>
      <Routes>
        <Route path="/" element={<PetListPage />} />
        <Route path="/add" element={<AddPetPage />} />
      </Routes>
    </Router>
  );
}

export default App;
