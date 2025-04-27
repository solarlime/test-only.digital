import styled from 'styled-components';
import HorizontalLine from '../shared/HorizontalLine';

const DatesHorizontalLine = styled(HorizontalLine)`
  visibility: hidden;
  width: calc(100% - 2 * var(--padding-outer));
  margin: 20px var(--padding-outer);
  background: #c7cdd9;

  @media screen and (max-width: 1000px) {
    visibility: visible;
  }
`;

export default DatesHorizontalLine;
