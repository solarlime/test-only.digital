import styled from 'styled-components';
import Arrow from './assets/arrow.svg?react';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  padding: 170px 80px 104px;
  box-sizing: border-box;

  @media screen and (max-width: 1300px) {
    padding: 70px 4vw 60px;
  }

  @media screen and (max-width: 500px) {
    align-items: flex-start;
    padding: 59px 0;
  }
`;

const Header = styled.header`
  position: relative;
  width: inherit;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  @media screen and (max-width: 500px) {
    padding: 0 20px;
  }
`;

const AccentBar = styled.div`
  position: absolute;
  flex-shrink: 0;
  width: 5px;
  height: calc(100% - 2 * 7px);
  margin-left: -80px;
  background: linear-gradient(var(--blue) -5%, var(--fuschia) 90%);

  @media screen and (max-width: 1300px) {
    height: 100%;
    margin-left: -4vw;
  }

  @media screen and (max-width: 1000px) {
    margin-left: 0;
  }

  @media screen and (max-width: 500px) {
    display: none;
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

const Numbers = styled.ul`
  display: flex;
  padding: 0;
  margin: 96px 0 137px;

  @media screen and (max-width: 1300px) {
    align-self: flex-end;
    margin: 6vw 0;
  }

  @media screen and (max-width: 500px) {
    align-self: flex-start;
    margin: 56px 0;
    padding: 0 20px;
  }
`;

const Number = styled.li`
  flex-shrink: 0;
  list-style-type: none;
  font-weight: bold;
  font-size: 200px;
  line-height: 160px;
  letter-spacing: calc(1em / -50);

  &:not(:last-child) {
    margin-right: 100px;
  }

  @media screen and (max-width: 1300px) {
    font-size: 13vw;
    line-height: normal;

    &:not(:last-child) {
      margin-right: 5vw;
    }
  }

  @media screen and (max-width: 500px) {
    font-size: 56px;
    line-height: normal;

    &:not(:last-child) {
      margin-right: 28px;
    }
  }
`;

const IrisNumber = styled(Number)`
  color: var(--iris);

  @media screen and (max-width: 500px) {
    color: var(--blue);
  }
`;

const FuschiaNumber = styled(Number)`
  color: var(--fuschia);

  @media screen and (max-width: 500px) {
    color: var(--pink);
  }
`;

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

const CircleController = styled.div`
  width: 100%;
  align-self: flex-start;
  margin-bottom: 56px;
  box-sizing: border-box;

  @media screen and (max-width: 1300px) {
    margin-bottom: 4vw;
  }

  @media screen and (max-width: 500px) {
    order: 1;
    padding: 0 20px;
    margin: 78px 0 0;
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

const HorLine = styled.div`
  display: none;

  @media screen and (max-width: 500px) {
    display: block;
    padding: 0 20px;
    margin-bottom: 20px;
    width: 100%;
    height: 1px;
    box-sizing: border-box;

    & > hr {
      display: block;
      width: inherit;
      height: inherit;
      margin: 0;
      border: 0;
      background: #c7cdd9;
    }
  }
`;

const DatesContainer = styled.div`
  position: relative;
  width: 100%;
`;

const DatesButton = styled(EllipsisButton)`
  position: absolute;
  top: calc(50% - 20px);
  width: 40px;
  height: 40px;
  color: var(--blue);
  background: var(--white);
  border: 0;
  box-shadow: color-mix(in srgb, var(--blue) 10%, transparent) 0 0 15px 0;

  &:not(:disabled):hover {
    background: color-mix(in srgb, var(--blue) 10%, var(--white));
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const DatesLeftButton = styled(DatesButton)`
  left: -60px;

  @media screen and (max-width: 1000px) {
    left: 10px;
  }
`;

const DatesRightButton = styled(DatesButton)`
  right: -60px;
  transform: rotate(180deg);

  @media screen and (max-width: 1000px) {
    right: 10px;
  }
`;

const Dates = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style-type: none;
  overflow-x: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Date = styled.li`
  flex-shrink: 0;
  margin: 0 80px 0 0;
  //min-width: 320px;
  //width: 80%;
  max-width: 400px;

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 1000px) {
    width: 320px;
  }

  @media screen and (max-width: 500px) {
    width: 250px;
    margin-right: 25px;

    &:first-child {
      padding-left: 20px;
    }

    &:last-child {
      padding-right: 20px;
    }
  }
`;

const DateHeader = styled.h4`
  margin: 0 0 15px;
  color: var(--blue);
  font-family: 'Bebas Neue', 'Times New Roman', sans-serif;
  font-weight: normal;
  font-size: 25px;
  line-height: 120%;

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const DateContent = styled.p`
  margin: 0;
`;

const App = () => {
  return (
    <Main>
      <Header>
        <AccentBar />
        <H1>
          Исторические <br />
          даты
        </H1>
      </Header>
      <Numbers>
        <IrisNumber>2015</IrisNumber>
        <FuschiaNumber>2022</FuschiaNumber>
      </Numbers>
      <CircleController>
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
      </CircleController>
      <HorLine>
        <hr />
      </HorLine>
      <DatesContainer>
        <DatesLeftButton type="button">
          <Arrow />
        </DatesLeftButton>
        <DatesRightButton type="button">
          <Arrow />
        </DatesRightButton>
        {/* @ts-ignore */}
        <Dates tabIndex="-1">
          <Date>
            <DateHeader>2015</DateHeader>
            <DateContent>
              13 сентября — частное солнечное затмение, видимое в Южной Африке и
              части Антарктиды
            </DateContent>
          </Date>
          <Date>
            <DateHeader>2016</DateHeader>
            <DateContent>
              Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных
              галактик, получившую обозначение GN-z11
            </DateContent>
          </Date>
          <Date>
            <DateHeader>2017</DateHeader>
            <DateContent>
              Компания Tesla официально представила первый в мире электрический
              грузовик Tesla Semi
            </DateContent>
          </Date>
          <Date>
            <DateHeader>2018</DateHeader>
            <DateContent>
              Старт космического аппарата Solar Probe Plus, предназначенного для
              изучения Солнца
            </DateContent>
          </Date>
          <Date>
            <DateHeader>2019</DateHeader>
            <DateContent>
              Google объявил о создании 53-кубитного квантового компьютера
            </DateContent>
          </Date>
          <Date>
            <DateHeader>2019</DateHeader>
            <DateContent>
              Корабль Crew Dragon вернулся на Землю из первого пилотируемого
              полёта
            </DateContent>
          </Date>
        </Dates>
      </DatesContainer>
    </Main>
  );
};

export default App;
