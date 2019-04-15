import styled, { keyframes } from 'styled-components'

export const pulse = keyframes`
    0% {
        transform: scale(0.35, 0.35)
    }
    50% {
        transform: scale(0.4, 0.4)
    }
    100% {
        transform: scale(0.35, 0.35)
    }
`

export const slideUp = keyframes`
    0% { 
        transform: translateY(25em)
    }
`
export const fadeIn = keyframes`
    0% {
      opacity: 0
    } 
    100% {
      opacity: 1
    }
`


export default pulse