export const tokens = {
  bg: {
    base:     '#0c0e0c',
    card:     '#141814',
    elevated: '#1c221c',
    input:    '#101410',
  },
  border: {
    default: '#2e3428',
    strong:  '#46503e',
  },
  text: {
    primary:   '#e4dfd4',
    secondary: '#9e9a92',
    muted:     '#606058',
  },
  accent: {
    red:          '#c42828',
    redHover:     '#d93838',
    redPressed:   '#a01e1e',
    brass:        '#b08820',
    brassHover:   '#c49a28',
  },
  severity: {
    stable:   '#3d8a48',
    unstable: '#8a8a30',
    degraded: '#c47a20',
    critical: '#c43020',
    unbound:  '#9a2c9a',
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
