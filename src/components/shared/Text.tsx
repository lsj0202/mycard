import { CSSProperties } from 'react'
import styled from '@emotion/styled'
import { Typography, typographyMap } from 'styles/typography'
import { colors, Colors } from 'styles/colorPalette'

interface TextProps {
  typography?: Typography
  color?: Colors
  display?: CSSProperties['display']
  textAlign?: CSSProperties['textAlign']
  fontWegith?: CSSProperties['fontWeight']
  bold?: boolean
}

const Text = styled.span<TextProps>(
  ({ color = 'black', display, textAlign, fontWegith, bold }) => ({
    color: colors[color],
    display,
    textAlign,
    fontWeight: bold ? 'bold' : fontWegith,
  }),
  ({ typography = 't5' }) => typographyMap[typography],
)

export default Text
