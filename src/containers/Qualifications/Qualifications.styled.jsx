import styled from "styled-components";
import theme from "../../styles/theme";

export const ContentWrapper = styled.div`
  background-color: ${theme.grey};
  flex: 0.9;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
`

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
  color: #fff;
  padding: calc(${theme.sizingUnit} * 0.45) calc(${theme.sizingUnit} * 1.2);
  font-size: ${theme.spacing(1)};
  margin-right: ${theme.spacing()};
`