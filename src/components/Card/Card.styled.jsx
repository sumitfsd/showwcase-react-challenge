import styled from "styled-components";
import theme from "../../styles/theme";

export const CardWrapper = styled.div`
  display: inline-block;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.15);
  margin: calc(${theme.sizingUnit} * 1);
  position: relative;
  transition: all .2s ease-in-out;
  background: ${theme.grey};
  color: ${theme.text};
  max-width: calc(${theme.sizingUnit} * 25);
  min-width: calc(${theme.sizingUnit} * 25);

  &:hover {
    margin-bottom: calc(${theme.sizingUnit} * 1.4);
  }
`

export const CardTitle = styled.div`
  height: calc(${theme.sizingUnit} * 3);
  letter-spacing: calc(${theme.sizingUnit} * .1);
  text-transform: capitalize;
  text-align: center;
  padding: calc(${theme.sizingUnit} * .5);
  background: ${props => props.isSelected ? theme.main : theme.mainLight};
  &:hover {
    cursor: pointer;
  }
`

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${theme.greyDark};
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: .5s ease;
`

export const OverlayContentWrapper = styled.div`
  display:  flex;
  flex-direction: column;
  position: absolute;
  padding: calc(${theme.sizingUnit} * .5);
  line-height:  calc(${theme.sizingUnit} * 2);
`

export const CardContext = styled.div`
  position: relative;
  display: flex;
  height: calc(${theme.sizingUnit} * 10);
  flex-direction: column;
  padding: calc(${theme.sizingUnit} * .5);
  line-height:  calc(${theme.sizingUnit} * 2);
  max-height: calc(${theme.sizingUnit} * 7);
  overflow-y: auto;
  &:hover ${Overlay} {
    height: 100%;
  }
`

export const Text = styled.div`
  color: ${theme.text};
  font-size: calc(${theme.sizingUnit} * 1);
  width: 100%;
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

