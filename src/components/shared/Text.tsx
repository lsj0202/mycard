import { CSSProperties } from 'react'
import styled from '@emotion/styled'
import { Typography, typographyMap } from 'styles/typography'
import { colors, Colors } from 'styles/colorPalette'

interface TextProps {
  typography?: Typography
  color?: Colors
  display?: CSSProperties['display']
  textAlign?: CSSProperties['textAlign']
  fontWeight?: CSSProperties['fontWeight']
  bold?: boolean
}

const Text = styled.span<TextProps>`
  color: ${({ color = 'black' }) => colors[color]};
  display: ${({ display }) => display};
  text-align: ${({ textAlign }) => textAlign};
  font-weight: ${({ fontWeight, bold }) => (bold ? 'bold' : fontWeight)};
  ${({ typography = 't5' }) => typographyMap[typography]};
`

export default Text
