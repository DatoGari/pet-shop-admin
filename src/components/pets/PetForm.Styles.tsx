import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  gap: 1rem;
  margin-bottom: 2rem;
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 12px;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
`;

export const Select = styled.select`
  padding: 0.5rem;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  font-weight: bold;
  border: none;
  background: #3498db;
  color: white;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #2980b9;
  }
`;