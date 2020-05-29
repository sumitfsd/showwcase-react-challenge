import styled from "styled-components";
import theme from "../../styles/theme";

export const ModalFooterActionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
`

export const CancelButton = styled.button`
  background: ${theme.greyDark};
  border-radius: calc(${theme.sizingUnit} * 0.25);
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
  color: ${theme.white};
  padding: calc(${theme.sizingUnit} * 0.45) calc(${theme.sizingUnit} * 1.2);
  font-size: ${theme.spacing(1)};
  margin-right: ${theme.spacing()};
`

export const WelcomeMessage = styled.div`
  width: 100%;
  padding: calc(${theme.sizingUnit} * 1);
  font-size: calc(${theme.sizingUnit} * 1.2);
  font-weight: 500;
  display: flex;
  justify-content: center;
`
