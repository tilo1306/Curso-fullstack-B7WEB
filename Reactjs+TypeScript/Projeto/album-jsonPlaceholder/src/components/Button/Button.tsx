import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Button = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return <button onClick={handleClick}>Voltar</button>;
};
