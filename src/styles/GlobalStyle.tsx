'use client';

import emotionReset from 'emotion-reset';

import { Global, css } from '@emotion/react';

export function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        body, * {
          font-family:
            'Pretendard Variable',
            Pretendard,
            -apple-system,
            BlinkMacSystemFont,
            system-ui,
            Roboto,
            'Helvetica Neue',
            'Segoe UI',
            'Apple SD Gothic Neo',
            'Noto Sans KR',
            'Malgun Gothic',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol',
            sans-serif;
          box-sizing: border-box;
        }

        body {
          background: #1a1918;
          height: 100vh;
          height: 100dvh;
          overscroll-behavior-y: none;
          overflow-y: hidden;
          width: 600px;
          margin: 0 auto;
          position: relative;
          border-right: 1px solid #a3a3a3;
          border-left: 1px solid #a3a3a3;
          box-sizing: content-box;

          @media (max-width: 600px) {
            width: 100%;
            border: 0;
          }
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        html {
          @media (max-width: 599px) {
            font-size: 15px;
          }
          @media (max-width: 530px) {
            font-size: 14px;
          }
          @media (max-width: 490px) {
            font-size: 13px;
          }
          @media (max-width: 460px) {
            font-size: 12px;
          }
          @media (max-width: 420px) {
            font-size: 11px;
          }
          @media (max-width: 390px) {
            font-size: 10px;
          }
          @media (max-width: 350px) {
            font-size: 9px;
          }
          @media (max-width: 320px) {
            font-size: 8px;
          }
        }

        button {
          padding: 0;
          border: none;
          outline: none;
          background: inherit;
          cursor: pointer;
        }

        // input type number일때 화살표 제거
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type='number'] {
          -moz-appearance: textfield;
        }
      `}
    />
  );
}

export default GlobalStyle;
