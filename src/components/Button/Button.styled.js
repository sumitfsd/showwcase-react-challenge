import styled, { keyframes, css } from 'styled-components/macro';
import { MdSync, MdErrorOutline, MdCheck } from 'react-icons/md';
import theme from '../../styles/theme';

const spin = keyframes`
  0% {
    transform: scale(0.5) rotate(0);
  }
  100% {
    transform: scale(0.5) rotate(-360deg);
  }
`;

export const StyledButton = styled.button`
  border-radius: ${theme.borderRadius};
  border: none;
  outline: 0 none;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ variant, theme }) => {
    switch (variant) {
      case 'accent':
        return theme.mainDark;
      case 'danger':
        return theme.error;
      case 'regular':
        return theme.grey;
      case 'subtle':
      case 'icon':
        return 'transparent';
      default:
        return theme.mainDark;
    }
  }};

  background-color: ${({ isInvalid }) => isInvalid && theme.lightRed};

  color: ${({ variant, theme }) => {
    switch (variant) {
      case 'accent':
      case 'danger':
        return theme.white;
      case 'regular':
      case 'subtle':
      case 'icon':
        return theme.text;
      default:
        return theme.white;
    }
  }};

  padding: ${({ variant, theme }) =>
    variant === 'icon' && `calc(${theme.sizingUnit} / 2)`};

  height: ${({ size, theme }) => {
    let factor = 1.5;
    switch (size) {
      case 'normal': {
        factor = 2.5;
        break;
      }
      case 'medium': {
        factor = 1.8;
        break;
      }
      default: {
        factor = 1.5;
        break;
      }
    }

    return `calc(${theme.sizingUnit} * ${factor})`;
  }};

  padding: ${({ size }) =>
    size === 'normal' ? '0.4rem 1.5rem' : '0.3rem 0.8rem '};

  font-size: ${({ size }) =>
    size === 'normal' ? '1rem' : size === 'medium' ? '0.85rem' : '0.69rem'};

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

const overlay = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  > path {
    transform: scale(0.5);
    transform-origin: center;
  }
`;

export const LoadingOverlay = styled(MdSync)`
  ${overlay}
  background-color: ${theme.main};
  color: ${theme.white};
  > path {
    animation: ${spin} 1.5s linear infinite;
  }
`;

export const SuccessOverlay = styled(MdCheck)`
  ${overlay}
  background-color: ${theme.success};
  color: ${theme.white};
`;

export const ErrorOverlay = styled(MdErrorOutline)`
  ${overlay}
  background-color: ${theme.error};
  color: ${theme.white};
`;
