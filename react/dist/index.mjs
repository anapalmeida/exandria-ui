// ../tokens/dist/index.mjs
var colors = {
  white: '#FFF',
  black: '#000',
  gray100: '#E1E1E6',
  gray200: '#A9A9B2',
  gray400: '#7C7C8A',
  gray500: '#505059',
  gray600: '#323238',
  gray700: '#29292E',
  gray800: '#202024',
  gray900: '#121214',
  exadria300: '#00B37E',
  exandria500: '#8CCB3C',
  exandria700: '#71A142',
  exandria900: '#5B8730',
}

// src/index.tsx
import { jsx } from 'react/jsx-runtime'
function App() {
  return /* @__PURE__ */ jsx('h1', {
    style: { color: colors.exandria500 },
    children: 'Hello World',
  })
}
export { App }
