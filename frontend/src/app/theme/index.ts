import type { GlobalThemeOverrides } from 'naive-ui'
import { tokens } from './tokens'

export { tokens }

export const themeOverrides: GlobalThemeOverrides = {
  common: {
    fontFamily:          tokens.font.body,
    fontFamilyMono:      tokens.font.mono,

    primaryColor:        tokens.accent.red,
    primaryColorHover:   tokens.accent.redHover,
    primaryColorPressed: tokens.accent.redPressed,
    primaryColorSuppl:   tokens.accent.redHover,

    successColor:        tokens.severity.stable,
    warningColor:        tokens.severity.degraded,
    errorColor:          tokens.severity.critical,
    infoColor:           '#1a3a5e',

    bodyColor:           tokens.bg.base,
    cardColor:           tokens.bg.card,
    modalColor:          tokens.bg.elevated,
    popoverColor:        tokens.bg.elevated,
    inputColor:          tokens.bg.input,

    textColor1:          tokens.text.primary,
    textColor2:          tokens.text.secondary,
    textColor3:          tokens.text.muted,

    borderColor:         tokens.border.default,
    dividerColor:        tokens.border.default,

    borderRadius:        tokens.radius.md,
    borderRadiusSmall:   tokens.radius.sm,
  },
  Card: {
    borderColor:         tokens.border.default,
    titleTextColor:      tokens.text.secondary,
    titleFontSizeMedium: '11px',
    titleFontSizeSmall:  '11px',
  },
  Descriptions: {
    labelTextColor:      tokens.text.muted,
  },
}
