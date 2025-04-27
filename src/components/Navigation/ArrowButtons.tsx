import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import ArrowButton from './ArrowButton';

const StyledArrowButtons = styled.div`
  display: flex;
  flex-basis: 25%;
`;

const ArrowButtons = observer(() => {
  return (
    <StyledArrowButtons>
      <ArrowButton name="left" />
      <ArrowButton name="right" />
    </StyledArrowButtons>
  );
});

export default ArrowButtons;
