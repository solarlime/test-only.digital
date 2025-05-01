import styled from 'styled-components';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useGSAP } from '@gsap/react';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useRef } from 'react';
import PeriodButtons from './PeriodButtons';
import NavigationLabel from './NavigationLabel';
import ArrowButtons from './ArrowButtons';
import { IExtendedPeriod } from '../../interfaces/content';
import { AppContext } from '../../AppContext';
import { useStore } from '../../store/StoreProvider';

const NavigationButtons = styled.div`
  display: flex;
`;

const StyledNavigation = styled.div`
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

gsap.registerPlugin(MotionPathPlugin, useGSAP);

const offsetAngle = -30;
const shift = offsetAngle / 360;

const Navigation = observer(
  ({ pathElement }: { pathElement: SVGPathElement | null }) => {
    const { blockStore } = useStore();
    const { isCompact } = useContext(AppContext);
    const itemsRef = useRef<HTMLDivElement[]>([]);
    const previousPeriodRef = useRef<IExtendedPeriod>({} as IExtendedPeriod);

    useGSAP(() => {
      if (isCompact) return;
      if (!pathElement) return;
      const items = itemsRef.current;
      const count = items.length;

      items.forEach((item, i) => {
        const progress = shift - i / count;
        gsap.to(item, {
          motionPath: {
            path: pathElement,
            align: pathElement,
            alignOrigin: [0.5, 0.5],
            start: progress,
            end: progress,
            autoRotate: false,
          },
          duration: 0,
        });
      });
    }, [pathElement]);

    useEffect(() => {
      if (isCompact) return;
      if (!pathElement) return;
      const items = itemsRef.current;
      const count = items.length;
      const progressOffset = 1 / count;
      const tweens: gsap.core.Tween[] = [];

      items.forEach((item, i) => {
        const progressStart =
          shift +
          progressOffset * (previousPeriodRef.current!.number - 1) -
          i / count;
        const progressEnd =
          shift + progressOffset * (blockStore.period.number - 1) - i / count;
        const tween = gsap.to(item, {
          motionPath: {
            path: pathElement,
            align: pathElement,
            alignOrigin: [0.5, 0.5],
            start: progressStart,
            end: progressEnd,
            autoRotate: false,
          },
          ease: 'power1.inOut',
          duration: 1,
        });
        tweens.push(tween);
      });

      return () => {
        tweens.forEach((tween) => tween.kill());
      };
    }, [blockStore.period.number]);

    return (
      <StyledNavigation>
        <NavigationLabel />
        <NavigationButtons>
          <ArrowButtons forwardedRef={previousPeriodRef} />
          <PeriodButtons forwardedRefs={{ itemsRef, previousPeriodRef }} />
        </NavigationButtons>
      </StyledNavigation>
    );
  },
);

export default Navigation;
