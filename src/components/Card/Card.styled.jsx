import styled from "styled-components";
import theme from "../../styles/theme";

export const CardWrapper = styled.div`
: hover {  
  box-shadow: 0 calc(${theme.sizingUnit} * 0.5) calc(${theme.sizingUnit} * 1) ${theme.greyDark}, 0 calc(${theme.sizingUnit} * 0.6) calc(${theme.sizingUnit} * 0.6) ${theme.greyDark};
  margin-bottom: calc(${theme.sizingUnit} * 5.4);
};
  height: 25rem;
  box-shadow: calc(${theme.sizingUnit} * 0.6);
  background: ${theme.mainDark};
  margin: 1rem;  
  box-shadow: 0 calc(${theme.sizingUnit} * 1) calc(${theme.sizingUnit} * 1) 0 rgba(0,0,0,.15);
  margin: calc(${theme.sizingUnit} * 2);
  position: relative;
  margin-bottom: calc(${theme.sizingUnit} * 5 );
  transition: all .2s ease-in-out;
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
