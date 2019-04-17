import { css } from "styled-components";

const sizes = {
  phone: 425,
  tablet: 768,
  desktop: 1024,
  giant: 1170
};

export const media = Object.keys(sizes).reduce((finalMedia, size) => {
  return {
    ...finalMedia,
    [size]: function(...args) {
      return css`
        @media (max-width: ${sizes[size]}px) {
          ${css(...args)}
        }
      `;
    }
  };
}, {});

export const media2 = Object.keys(sizes).reduce((finalMedia, size) => {
  return {
    ...finalMedia,
    [size]: function(...args) {
      return css`
        @media (min-width: ${sizes[size]}px) {
          ${css(...args)}
        }
      `;
    }
  };
}, {});
