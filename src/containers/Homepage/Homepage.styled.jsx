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
`

export const Button = styled.button`
  background-color: ${theme.greyDark};
  text-align: center;  
  margin-top: calc(${theme.sizingUnit} * 1.6);
  padding: calc(${theme.sizingUnit} * 0.8);
  width: calc(${theme.sizingUnit} * 12);
`
export const NameInput =  styled.input`
  height: ${theme.inputHeight};
  padding: calc(${theme.sizingUnit} * 0.1);
`
