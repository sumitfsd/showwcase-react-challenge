import styled, { keyframes } from "styled-components";
import theme from "../../styles/theme";

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`

export const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

export const Dot = styled.div`
  background-color: ${theme.mainDark};
  border-radius: 50%;
  width: 2px;
  height: 2px;
  margin: 0 1px;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;