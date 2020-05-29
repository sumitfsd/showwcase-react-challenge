import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import theme from '../../styles/theme'

const logoSize = '3rem'
const toggleSpeed = '.15s'
const easeOutExponential = 'cubic-bezier(.19,1,.22,1)'

export const NavigationWrapper = styled.div`
  background-color: ${theme.main};
  transition: width ${toggleSpeed} ${easeOutExponential};
  flex: 0.1;
  max-width: 12rem;
`

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const LogoLinkWrapper = styled.div`
  a {
    transition: padding ${toggleSpeed} ${easeOutExponential};
    display: flex;
    align-items: center;
    padding: ${({ isCollapsed }) =>
    isCollapsed ? `calc(${theme.sizingUnit} / 3)` : theme.sizingUnit};
    justify-content: center;
  }
`

export const LogoIcon = styled.img`
  height: ${({ isCollapsed }) => isCollapsed ? '1.8rem' : logoSize};
  margin-top: ${({ isCollapsed }) =>
    isCollapsed && `calc(${theme.sizingUnit} / 4)`};  
  margin-right: ${({ isCollapsed }) => !isCollapsed && '0.6rem'};
  transition: height ${toggleSpeed} ${easeOutExponential},
    margin ${toggleSpeed} ${easeOutExponential};
`

export const IconWrapper = styled.div`
  background: rgba(255,255,255,0.15);
  height: calc(${theme.sizingUnit} * 2.1);
  width: calc(${theme.sizingUnit} * 2.1);
  border-radius: ${theme.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 ${theme.spacing(0.5)};

  svg {
    color: ${theme.white};
    height: 1.5rem;
    width: 1.5rem;
    min-width: 1.5rem;
    margin: ${({ isCollapsed }) => isCollapsed ? '0.6rem' : '0.8rem'};
    transition: margin ${toggleSpeed} ${easeOutExponential};
  }
`

export const LogoText = styled.div`
  margin-top: 0;
  font-weight: 700;
  font-size: calc(${theme.sizingUnit} * 1.2);
  border-radius: 3rem;
`

export const FlexGrow = styled.div`
  flex-grow: 1;
`

export const Links = styled.div`
  margin-top: calc(${theme.sizingUnit} * 2);
  display: flex;
  flex-direction: column;
  transition: margin ${toggleSpeed} ${easeOutExponential};
`

const link = css`
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 100%;
  color: ${theme.white};
  height: calc(${theme.sizingUnit} * 2.8);
  transition: background-color 0.1s ease-in-out;
  position: relative;
  justify-content: ${({ isCollapsed }) =>
    isCollapsed ? '': 'center'};

  &:hover {
    background-color: rgba(255,255,255,0.15);
  }

  &:focus,
  &:active {
    outline: none;
    background-color: ${theme.mainLight};
    color: ${theme.mainDark}
  }
`

export const StyledNavLink = styled(NavLink)`
  ${link}

  &.activeLink {
    div {
      background-color: ${theme.mainDark};
    }
  }
`

export const LinkText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: calc(${theme.sizingUnit} * 0.5);
  line-height: calc(${theme.sizingUnit} * 2.5);
`
