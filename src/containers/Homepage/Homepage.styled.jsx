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
  width: 20rem;
  height: 20rem;
  padding: 2.5rem;
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
  margin-top: 1.6rem;
  padding: 0.8rem;
  width: 12rem;
`
export const NameInput =  styled.input`
  height: ${theme.inputHeight};
  padding: 0.1rem;
`
