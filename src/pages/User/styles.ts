import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  form {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  input {
    display: flex;
    width: 100%;
    height: 40px;
    color: #a8a8b3;
    font-weight: 600;
    border: 0;
    background: transparent;
    font-size: 16px;
    border-bottom: 2px solid #a8a8b3;
    margin-bottom: 1rem;
    padding: 0 5px;

    &::placeholder {
      color: #a8a8b3;
    }

    &:focus {
      color: #333333;
      border-bottom: 2px solid #333333;
    }
  }

  span {
    color: #eb4a46;
    align-self: flex-start;
    margin-bottom: 1rem;
  }

  label {
    width: 100%;
    color: #3d3d4d;
    font-weight: 500;
    font-size: 1.1rem;
  }
`;

export const Header = styled.div`
  max-width: 600px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5rem;

  h2 {
    color: #3d3d4d;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-weight: bold;
    color: #00c8b3;
  }
`;
