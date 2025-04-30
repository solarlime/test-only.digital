import styled from 'styled-components';

const VerticalLine = styled.div`
  width: 1px;
  height: 100%;
  flex-shrink: 0;
  background-color: color-mix(in srgb, var(--dove) 10%, transparent);

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export default VerticalLine;
