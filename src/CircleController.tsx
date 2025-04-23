import styled from 'styled-components';
import EllipsisButton from './components/shared/EllipsisButton';
import Arrow from './assets/arrow.svg?react';
import { observer } from 'mobx-react-lite';

const Buttons = styled.div`
  display: flex;
`;

const CircleBackButton = styled(EllipsisButton)`
  margin-right: 20px;

  @media screen and (max-width: 500px) {
    margin-right: 8px;
  }
`;

const CircleNextButton = styled(EllipsisButton)`
  transform: rotate(180deg);
`;

const StyledCircleController = styled.div`
  align-self: flex-start;
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 500px) {
    order: 1;
    margin-top: 40px;
    padding: 0 var(--padding-outer);
  }
`;

const Label = styled.p`
  margin: 0 0 20px;
  font-size: 14px;
  line-height: normal;

  @media screen and (max-width: 500px) {
    margin: 0 0 11px;
  }
`;

const CircleController = observer(() => {
  return (
    <StyledCircleController>
      <Label>06/06</Label>
      <Buttons>
        <CircleBackButton type="button">
          <Arrow />
        </CircleBackButton>
        <CircleNextButton type="button" disabled>
          <Arrow />
        </CircleNextButton>
      </Buttons>
      {/*<form>*/}
      {/*  <input type="radio" name="circle" value="1" />*/}
      {/*  <input type="radio" name="circle" value="2" />*/}
      {/*  <input type="radio" name="circle" value="3" />*/}
      {/*</form>*/}
    </StyledCircleController>
  );
});

export default CircleController;
