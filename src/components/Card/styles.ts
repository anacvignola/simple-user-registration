import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin: 1rem 0;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0px 2px 23px 0px rgba(0, 0, 0, 0.08);

  div {
    display: flex;
    flex-wrap: wrap;
    line-height: 28px;

    span {
      font-weight: bold;
      color: #3d3d4d;
      font-size: 1.2rem;
      margin-right: 2rem;
    }

    p {
      color: #a8a8b3;
      margin-right: 2rem;
    }
  }

  button {
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
