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
  margin: auto;
  display: block;
  position: fixed;
  width: 300px;
  height: 300px;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -100px;
  color: ${theme.white};
  border-radius: ${theme.borderRadius};
  text-align: center;
`

export const Button = styled.button`
  background-color: ${theme.greyDark};
  text-align: center;
  width: 100px;
`
export const NameInput =  styled.input`
  height: ${theme.inputHeight};
  padding: ${theme.inputPadding};
`
