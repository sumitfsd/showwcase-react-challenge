import styled from "styled-components";
import theme from "../../styles/theme";

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

export const CardTitle = styled.div`
  height: 3rem;
  background: blue;
`

export const CardContext = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  font-size: 1rem;
  color: ${theme.white};
  padding-left: 2rem;
  padding-top: 1rem;
`
