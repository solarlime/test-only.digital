import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { RefObject } from 'react';

const StyledCircle = styled.svg`
  position: absolute;
  top: 10%;
  height: 80%;
  aspect-ratio: 1;
  max-width: 100%;
  z-index: 1;

  @media screen and (max-width: 800px) {
    padding: 0 var(--padding-outer);
    box-sizing: border-box;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Circle = observer(
  ({
    ref,
    pathRef,
  }: {
    ref?: RefObject<SVGSVGElement | null>;
    pathRef?: (node: SVGPathElement | null) => void;
  }) => {
    return (
      <StyledCircle
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
      >
        <path
          ref={pathRef}
          d="
          M 50,0
          a 49.5,49.5 0 1,0 0,99
          a 49.5,49.5 0 1,0 0,-99
        "
          stroke="currentColor"
          strokeOpacity="0.2"
          vectorEffect="non-scaling-stroke"
        />
      </StyledCircle>
    );
  },
);

export default Circle;
