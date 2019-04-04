import { css } from 'styled-components'

const sizes = {
  phone: 376,
  tablet: 768,
  desktop: 992,
  giant: 1170
}

function phone(...args) {
  return css`
    @media(max-width: ${sizes.phone}px) {
      ${css(...args)}
    }
  `
}

function desktop(...args) {
  return css`
    @media(min-width: ${sizes.desktop}px) {
      ${css(...args)}
    }
  `
}

const media = {
  phone,
  desktop
}


export default media