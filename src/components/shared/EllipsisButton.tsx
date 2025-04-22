import styled from 'styled-components';

const EllipsisButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: var(--dove);
  box-sizing: border-box;

  & svg {
    display: block;
    width: 20%;
  }

  @media screen and (max-width: 500px) {
    width: 25px;
    height: 25px;
  }
`;

export default EllipsisButton;
