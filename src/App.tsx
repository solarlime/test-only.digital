import styled from 'styled-components';
import Arrow from './assets/arrow.svg?react';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  padding: 170px 80px 104px;
  border-width: 0 1px;
  border-color: color-mix(in srgb, var(--dove) 10%, transparent);
  border-style: solid;
  box-sizing: border-box;
`;

const Header = styled.header`
  position: relative;
  width: inherit;
  display: flex;
  align-items: center;
`;

const AccentBar = styled.div`
  position: absolute;
  flex-shrink: 0;
  width: 5px;
  height: calc(100% - 2 * 7px);
  margin-left: -81px;
  background: linear-gradient(var(--blue) -5%, var(--fuschia) 90%);
`;

const H1 = styled.h1`
  padding: 0;
  margin: 0;
  font-weight: bold;
  font-size: 56px;
  line-height: 120%;
`;

const Numbers = styled.ul`
  display: flex;
  padding: 0;
  margin: 96px 0 137px;
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
`;

const IrisNumber = styled(Number)`
  color: var(--iris);
`;

const FuschiaNumber = styled(Number)`
  color: var(--fuschia);
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
    width: 10px;
  }
`;

const Buttons = styled.div`
  display: flex;
`;

const CircleBackButton = styled(EllipsisButton)`
  margin-right: 20px;
`;

const CircleNextButton = styled(EllipsisButton)`
  transform: rotate(180deg);
`;

const CircleController = styled.div`
  width: 100%;
  align-self: flex-start;
  margin-bottom: 56px;
`;

const Label = styled.p`
  margin: 0 0 20px;
  font-size: 14px;
  line-height: normal;
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

  & svg {
    display: block;
    width: 8px;
  }
`;

const DatesLeftButton = styled(DatesButton)`
  left: -60px;
`;

const DatesRightButton = styled(DatesButton)`
  right: -60px;
  transform: rotate(180deg);
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
  min-width: 320px;
  width: 80%;
  max-width: 400px;

  &:last-child {
    margin-right: 0;
  }
`;

const DateHeader = styled.h4`
  margin: 0 0 15px;
  color: var(--blue);
  font-family: 'Bebas Neue', 'Times New Roman', sans-serif;
  font-weight: normal;
  font-size: 25px;
  line-height: 120%;
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
      </CircleController>
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
