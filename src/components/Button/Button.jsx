import React, { Component } from 'react'
import PropTypes from 'prop-types'

import artificialMinimumTime from '../../helpers/artificialMinimumTime'

import {
  StyledButton,
  LoadingOverlay,
  SuccessOverlay,
  ErrorOverlay
} from './Button.styled'

const minimumRequestTime = 500
const errorDisplayLength = 3000
const successDisplayLength = 1000

class Button extends Component {
  static propTypes = {
    isInvalid: PropTypes.bool,
    variant: PropTypes.oneOf(['accent', 'danger', 'regular', 'subtle', 'icon']),
    size: PropTypes.oneOf(['normal', 'medium', 'small']),
    shouldBeLoading: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onComplete: PropTypes.func,
    onError: PropTypes.func,
    action: PropTypes.func,
    children: PropTypes.node.isRequired
  }

  state = {
    loading: false,
    error: false,
    actioned: false
  }

  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render () {
    const {
      shouldBeLoading,
      isInvalid,
      disabled = false,
      variant = 'accent',
      size = 'normal',
      onClick,
      onComplete,
      action,
      children,
      ...rest
    } = this.props

    const { error, actioned } = this.state

    // Let a passed-in loading state override the internal loading state
    const loading = shouldBeLoading !== undefined ? shouldBeLoading : this.state.loading
    return (
      <StyledButton
        isInvalid={isInvalid}
        variant={variant}
        size={size}
        onClick={onClick || this.handleClick}
        disabled={disabled || loading || actioned || error}
        {...rest}
      >
        {children}
        {loading && <LoadingOverlay />}
        {actioned && <SuccessOverlay />}
        {error && <ErrorOverlay />}
      </StyledButton>
    )
  }

  handleClick () {
    const { action, onComplete } = this.props

    this.setState(() => ({ loading: true }))

    if (action) {
      const time = Date.now()

      action()
        .then(artificialMinimumTime(this.onSuccess, time, minimumRequestTime))
        .catch(artificialMinimumTime(this.onError, time, minimumRequestTime))

      return
    }

    onComplete()

    this.setState({
      loading: false
    })
  }

  onSuccess = (...args) => {
    const { onComplete } = this.props

    this.setState({
      actioned: true
    })

    window.setTimeout(() => {
      onComplete(...args)

      this.reset()
    }, successDisplayLength)
  }

  onError = (...args) => {
    const { onError } = this.props

    this.setState(
      {
        error: true
      },
      () => {
        if (onError) {
          onError(...args)
        }
      }
    )

    window.setTimeout(() => {
      this.reset()
    }, errorDisplayLength)
  }

  reset = () => {
    this.setState({
      loading: false,
      error: false,
      actioned: false
    })
  }
}

export default Button
