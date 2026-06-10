export const tokens = {
  bg: {
    base:     '#0a0c0a',
    card:     '#111512',
    elevated: '#181c18',
    input:    '#0d100e',
  },
  border: {
    default: '#242820',
    strong:  '#353b30',
  },
  text: {
    primary:   '#cbc6b8',
    secondary: '#7a7870',
    muted:     '#474542',
  },
  accent: {
    red:          '#8b1e1e',
    redHover:     '#a52626',
    redPressed:   '#6e1818',
    brass:        '#8a6b18',
    brassHover:   '#9e7a1e',
  },
  severity: {
    stable:   '#2c5c34',
    unstable: '#5b5b28',
    degraded: '#8a5916',
    critical: '#8a2716',
    unbound:  '#6a1e6a',
  },
  font: {
    display: "'Cinzel', serif",
    body:    "'Inter Variable', 'Inter', sans-serif",
    mono:    "'JetBrains Mono', 'Courier New', monospace",
  },
  radius: {
    sm: '2px',
    md: '4px',
    lg: '6px',
  },
} as const
