import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  ButtonColor,
  ButtonSize,
  buttonColorMap,
  buttonWeakMap,
  buttonSizeMap,
} from 'styles/button'

interface ButtonProps {
  color?: ButtonColor
  size?: ButtonSize
  weak?: boolean
  full?: boolean
  disabled?: boolean
}

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  font-weight: bold;
  border-radius: 6px;
  ${({ color = 'primary', weak }) =>
    weak ? buttonWeakMap[color] : buttonColorMap[color]};
  ${({ size = 'small' }) => buttonSizeMap[size]};
  ${({ full }) =>
    full &&
    css`
      display: block;
      width: 100%;
      border-radius: 0;
    `};
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.26;
      cursor: initial;
    `};
`

export default Button
