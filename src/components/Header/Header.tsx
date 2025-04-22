import { ReactNode } from 'react';
import styled from 'styled-components';
import AccentBar from './AccentBar';
import { observer } from 'mobx-react-lite';

const StyledHeader = styled.header`
  position: relative;
  width: inherit;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  @media screen and (max-width: 500px) {
    padding: 0 20px;
  }
`;

const H1 = styled.h1`
  padding: 0;
  margin: 0;
  font-weight: bold;
  font-size: 56px;
  line-height: 120%;

  @media screen and (max-width: 1300px) {
    margin-left: 4vw;
    font-size: 4vw;
  }

  @media screen and (max-width: 500px) {
    margin-left: 0;
    font-size: 20px;
  }
`;

const Header = observer(({ children }: { children: ReactNode }) => {
  return (
    <StyledHeader>
      <AccentBar />
      <H1>{children}</H1>
    </StyledHeader>
  );
});

export default Header;
