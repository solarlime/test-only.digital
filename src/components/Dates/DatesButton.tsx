import styled, { css } from 'styled-components';
import EllipsisButton from '../shared/EllipsisButton';

const DatesButton = styled(EllipsisButton)`
  position: absolute;
  top: calc(50% - 20px);
  width: 40px;
  height: 40px;
  color: var(--blue);
  background: var(--white);
  border: 0;
  box-shadow: color-mix(in srgb, var(--blue) 10%, transparent) 0 0 15px 0;

  ${(props) =>
    props.name === 'left' &&
    css`
      left: -60px;
    `}
  ${(props) =>
    props.name === 'right' &&
    css`
      right: -60px;
      transform: rotate(180deg);
    `}

  &:disabled {
    display: none;
  }

  &:not(:disabled):hover {
    background: color-mix(in srgb, var(--blue) 10%, var(--white));
  }

  @media screen and (max-width: 1300px) {
    width: 30px;
    height: 30px;

    ${(props) =>
      props.name === 'left' &&
      css`
        left: -4vw;
      `}
    ${(props) =>
      props.name === 'right' &&
      css`
        right: -4vw;
      `}
  }

  @media screen and (max-width: 1000px) {
    ${(props) =>
      props.name === 'left' &&
      css`
        left: 0;
      `}
    ${(props) =>
      props.name === 'right' &&
      css`
        right: 0;
      `}
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export default DatesButton;
