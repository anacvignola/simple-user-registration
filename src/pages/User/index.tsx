import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import { RiArrowLeftSLine } from 'react-icons/ri';
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

const User: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const data = {
      name,
      email,
      cpf,
      phone,
    };
    setLoading(true);
    localStorage.setItem(`${cpf}`, JSON.stringify(data));
    history.push('/');
    setLoading(false);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'name') {
      setName(value);

      if (
        value.length > 2 &&
        cpf.length > 2 &&
        email.length > 2 &&
        phone.length > 2
      ) {
        setIsEnabled(true);
      } else {
        setIsEnabled(false);
      }
    } else if (name === 'cpf') {
      setCpf(value);

      if (
        name.length > 2 &&
        value.length > 2 &&
        email.length > 2 &&
        phone.length > 2
      ) {
        setIsEnabled(true);
      } else {
        setIsEnabled(false);
      }
    } else if (name === 'email') {
      setEmail(value);

      if (
        name.length > 2 &&
        cpf.length > 2 &&
        value.length > 2 &&
        phone.length > 2
      ) {
        setIsEnabled(true);
      } else {
        setIsEnabled(false);
      }
    } else if (name === 'phone') {
      setPhone(value);

      if (
        name.length > 2 &&
        cpf.length > 2 &&
        email.length > 2 &&
        value.length > 2
      ) {
        setIsEnabled(true);
      } else {
        setIsEnabled(false);
      }
    }
  };

  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header>
        <h2>Novo usuário</h2>
        <Link to="/">
          <RiArrowLeftSLine size={30} color="#00c8b3" />
          Voltar
        </Link>
      </Header>
      <form onSubmit={handleSubmit}>
        <label>Nome completo(sem abreviações):</label>
        <input
          name="name"
          type="text"
          required
          placeholder="Seu nome completo(sem abreviações)"
          id="name"
          value={name}
          onChange={handleInputChange}
        />
        <span hidden={!(name.length < 3 && name.length > 0)}>
          Campo deve conter 3 caracteres ou mais.
        </span>
        <label>CPF:</label>
        <input
          name="cpf"
          type="text"
          id="cpf"
          required
          placeholder="Seu CPF"
          onChange={handleInputChange}
          value={cpf}
        />
        <span hidden={!(cpf.length < 3 && cpf.length > 0)}>
          Campo deve conter 3 caracteres ou mais.
        </span>
        <label>Telefone:</label>
        <input
          name="phone"
          id="phone"
          type="text"
          required
          placeholder="Seu telefone"
          onChange={handleInputChange}
          value={phone}
        />
        <span hidden={!(phone.length < 3 && phone.length > 0)}>
          Campo deve conter 3 caracteres ou mais.
        </span>
        <label>E-mail:</label>
        <input
          name="email"
          id="email"
          type="email"
          required
          placeholder="Seu e-mail"
          onChange={handleInputChange}
          value={email}
        />
        <span hidden={!(email.length < 3 && email.length > 0)}>
          Campo deve conter 3 caracteres ou mais.
        </span>
        <Button disabled={!isEnabled} type="submit">
          {loading ? (
            <ReactLoading type="spin" width={18} color="#fff" />
          ) : (
            'Cadastrar'
          )}
        </Button>
      </form>
    </Container>
  );
};

export default User;
