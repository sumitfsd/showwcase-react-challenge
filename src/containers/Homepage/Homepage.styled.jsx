import styled from "styled-components";
import theme from "../../styles/theme";
import Button from '../../components/Button';

export const ContentWrapper = styled.div`
  background-color: ${theme.grey};
  flex: 0.9;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
`
export const MidFrame = styled.div`
  background-color: ${theme.main};
  position: relative;
  width: calc(${theme.sizingUnit} * 20);
  height: calc(${theme.sizingUnit} * 20);
  padding: calc(${theme.sizingUnit} * 2.5);
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: ${theme.white};
  border-radius: ${theme.borderRadius};
  text-align: center;
  align-content: center;
  display: flex;
  flex-direction: column; 
`

export const StyledButton = styled(Button)`
  margin-top: calc(${theme.sizingUnit} * 1.6);
  width: calc(${theme.sizingUnit} * 12);
  align-self: center;
`
export const NameInput =  styled.input`
  height: ${theme.inputHeight};
  padding: calc(${theme.sizingUnit} * 0.1);
`
