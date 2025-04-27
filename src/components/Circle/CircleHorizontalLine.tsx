import styled from 'styled-components';
import HorizontalLine from '../shared/HorizontalLine';

const CircleHorizontalLine = styled(HorizontalLine)`
  position: absolute;
  top: calc(50% - 0.5px);
  background-color: color-mix(in srgb, var(--dove) 10%, transparent);

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export default CircleHorizontalLine;
