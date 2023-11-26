import { CSSProperties } from 'react'
import { Colors, colors } from '@/styles/colorPalette'
import { Typography, typographyMap } from '@/styles/typography'
import styled from '@emotion/styled'

interface TextProps {
  typography: Typography
  color: Colors
  display: CSSProperties['display']
  textAlign: CSSProperties['textAlign']
  fontWegith: CSSProperties['fontWeight']
  bold?: boolean
}

const Text = styled.span<TextProps>(
  ({ color, display, textAlign, fontWegith, bold }) => ({
    color: colors[color],
    display,
    textAlign,
    fontWeight: bold ? 'bold' : fontWegith,
  }),
  ({ typography }) => typographyMap[typography],
)

export default Text
