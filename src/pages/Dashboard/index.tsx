import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';

import api from '../../services/api';

import Card from '../../components/Card';
import Button from '../../components/Button';

import { Container, Header } from './styles';

interface User {
  name: string;
  cpf: string;
  phone: string;
  email: string;
}

interface UsersProps {
  users: User[];
}

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      if (localStorage.length === 0) {
        const usersApi = await api.get('/users');
        const allUsers = usersApi.data;

        allUsers.map((user: User, index: number) => {
          localStorage.setItem(`${user.cpf}`, JSON.stringify(user));
        });

        setUsers(allUsers);
        setLoading(false);
      } else {
        const usersLocal = allStorage();
        setUsers(usersLocal);
        setLoading(false);
      }
    };

    getUsers();
  }, [users]);

  const allStorage = () => {
    const values = [];
    const keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i]) || '{}'));
    }

    return values;
  };

  return (
    <Container>
      <Header>
        <h1>Lista de usuários:</h1>
        <Link to="/new">
          <Button>+ Novo usuário</Button>
        </Link>
      </Header>
      {loading ? (
        <ReactLoading type="spinningBubbles" color="#00c8b3" width={80} />
      ) : (
        users.map(user => (
          <Card
            key={user.name}
            name={user.name}
            cpf={user.cpf}
            email={user.email}
            phone={user.phone}
          />
        ))
      )}
    </Container>
  );
};

export default Dashboard;
