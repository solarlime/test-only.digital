import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { ReactNode } from 'react';
import AccentBar from './AccentBar';

const StyledHeader = styled.header`
  position: relative;
  width: inherit;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  @media screen and (max-width: 500px) {
    padding: 0 var(--padding-outer);
  }
`;

const H1 = styled.h1`
  padding: 0;
  margin: 0;
  font-weight: bold;
  font-size: var(--font-size-h1);
  line-height: 120%;

  @media screen and (max-width: 500px) {
    margin-left: 0;
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
