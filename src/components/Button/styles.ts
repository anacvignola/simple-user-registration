import styled from 'styled-components';

export const Container = styled.button`
  background: #00c8b3;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 3rem;
  font-size: 18px;
  font-weight: bold;
  height: 3rem;
  border: 0;
  transition: all 0.3s ease-in-out;
  width: 15rem;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }

  :disabled {
    background-color: #f6f6f6;
    color: #dddcdc;
  }
`;
