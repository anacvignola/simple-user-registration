import React from 'react';

import { RiDeleteBin2Line } from 'react-icons/ri';

import { Container } from './styles';

interface CardProps {
  name: string;
  cpf: string;
  phone: string;
  email: string;
}

const Card: React.FC<CardProps> = ({ name, cpf, phone, email }) => {
  const handleDelete = () => {
    localStorage.removeItem(cpf);
  };

  return (
    <Container>
      <div>
        <span>{name}</span>
        <p>{cpf}</p>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
      <button type="button" onClick={handleDelete}>
        <RiDeleteBin2Line size={32} color="#df4279" />
      </button>
    </Container>
  );
};

export default Card;
