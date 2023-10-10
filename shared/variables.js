export const mq = [
  `@media (min-width: 1024px)`,
  `@media (min-width: 768px)`
]

export const flexStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem'
}

export const spacing = {
  topPadding: '4.8rem',
  sidePadding: '2rem',
  doublePadding: '2rem'
}

export const colors = {
  white: '#E4E6EB',
  black: '#18191A',
  primary: '#0094ff',
  lightBlue: '#E5E6EE',
  iob: '#182747',
  grey: {
    100: '#F1F1F1',
    130: '#D3D3D3',
    200: '#9F9F9F',
    300: '#6E6D7A',
  },
}

export const globalVar = {
  bottomNavHeight: '6.5rem',
  radius: '0.3rem',
  border: `1px solid ${colors.white}`,
}

export const fontStyles = {
  regular: {
    fontWeight: 300,
    [`${mq[0]}`]: {
      fontWeight: 400,
    }
  },
  semiBold: {
    fontWeight: 500,
    [`${mq[0]}`]: {
      fontWeight: 600,
    }
  },
  title: {
    fontSize: '4.3rem',
  }
}
