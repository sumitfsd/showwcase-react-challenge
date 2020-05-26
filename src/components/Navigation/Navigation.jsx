import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import {
  NavigationWrapper,
  Content,
  LogoLinkWrapper,
  LogoIcon,
  IconWrapper,
  LogoText,
  FlexGrow,
  LinkText,
  Links,
  StyledNavLink
} from './Navigation.styled.js'

Navigation.propTypes = {
  history: PropTypes.object.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      icon: PropTypes.any.isRequired
    })
  ),
  isCollapsed: PropTypes.bool,
  toggleNavigation: PropTypes.func.isRequired
}

export default function Navigation({ links, isCollapsed, toggleNavigation }) {
  function handleToggle() {
    toggleNavigation()
  }

  return (
    <NavigationWrapper>
      <Content>
        <LogoLinkWrapper isCollapsed={isCollapsed}>
          <NavLink to='/' isCollapsed={isCollapsed}>
            <LogoIcon src='/logo.png' alt='Showwcase' isCollapsed={isCollapsed} />
            {!isCollapsed && (
              <LogoText> Showwcase </LogoText>
            )}
          </NavLink>
        </LogoLinkWrapper>

        <Links>
          {links && links.map(({ text, to, icon: Icon }, i) => (
            <StyledNavLink
              activeClassName='activeLink'
              key={i}
              to={to}
            >
              <IconWrapper>
                <Icon />
              </IconWrapper>
              {!isCollapsed && (
                <LinkText>
                  {text}
                </LinkText>
              )}
            </StyledNavLink>
          ))}
        </Links>

        <FlexGrow onClick={handleToggle} />
      </Content>
    </NavigationWrapper>
  )
}
