import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { v4 as uuidv4 } from 'uuid';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import DatesButtons from './DatesButtons';
import { useStore } from '../../store/StoreProvider';

import 'swiper/css';

const StyledDates = styled.div`
  position: relative;
  width: 100%;
  flex-shrink: 0;
  padding: 0 var(--padding-outer);
  box-sizing: border-box;

  @media screen and (max-width: 500px) {
    padding: 0 var(--padding-outer);
  }
`;

const DatesList = styled(Swiper)`
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

const Date = styled(SwiperSlide)`
  flex-shrink: 0;
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

const Dates = observer(() => {
  const { blockStore } = useStore();

  return (
    <>
      {!blockStore.hasContent && (
        <StyledDates>
          <p data-testid="no-dates">Нет дат для отображения</p>
        </StyledDates>
      )}
      {blockStore.hasContent && (
        <StyledDates>
          <DatesButtons />
          <DatesList
            // @ts-ignore
            tabIndex="-1"
            modules={[Navigation]}
            spaceBetween={25}
            slidesPerView={1.5}
            onUpdate={(swiper: SwiperClass) => {
              swiper.slideTo(0, 0);
            }}
            breakpoints={{
              650: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              800: {
                slidesPerView: 2.5,
                spaceBetween: 45,
              },
              1300: {
                slidesPerView: 3,
                spaceBetween: 80,
              },
            }}
            navigation={{
              nextEl: `button[name="right"][data-id=${blockStore.blockID}]`,
              prevEl: `button[name="left"][data-id=${blockStore.blockID}]`,
            }}
            scrollbar={{ draggable: true, snapOnRelease: true }}
            cssMode
          >
            {blockStore.period.dates.map((date) => (
              <Date key={uuidv4()}>
                <DateHeader>{date.date}</DateHeader>
                <DateContent>{date.content}</DateContent>
              </Date>
            ))}
          </DatesList>
        </StyledDates>
      )}
    </>
  );
});

export default Dates;
