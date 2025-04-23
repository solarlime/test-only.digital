import styled from 'styled-components';

const AccentBar = styled.div`
  position: absolute;
  flex-shrink: 0;
  width: 5px;
  height: calc(100% - 2 * 7px);
  margin-left: calc(var(--padding-outer) * -1);
  background: linear-gradient(var(--blue) -5%, var(--fuschia) 90%);

  @media screen and (max-width: 1300px) {
    height: 100%;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export default AccentBar;
