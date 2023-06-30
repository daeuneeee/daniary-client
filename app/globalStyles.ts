import { css } from '@emotion/react'
import { styleSet } from './styleSet'

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #18181b;
    color: #fff;
    font-family: suite400, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    @media ${styleSet.breakPoints.mobile} {
      font-size: 0.5rem;
    }
  }

  @font-face {
    font-family: 'suite300';
    src: url('/fonts/suite300.woff2');
  }

  @font-face {
    font-family: 'suite400';
    src: url('/fonts/suite400.woff2');
  }

  @font-face {
    font-family: 'suite600';
    src: url('/fonts/suite600.woff2');
  }

  @font-face {
    font-family: 'suite700';
    src: url('/fonts/suite700.woff2');
  }
`
