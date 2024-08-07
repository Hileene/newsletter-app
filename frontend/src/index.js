import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import App from './App'
import RobotoRegular from './assets/fonts/Roboto-Regular.ttf'
import RobotoBold from './assets/fonts/Roboto-Bold.ttf'
import './index.css'

/*Global Style*/
const theme = createTheme({
  typography: {
    fontFamily: 'Roboto,',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': [
          {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 400,
            src: `url(${RobotoRegular}) format('truetype')`,
          },
          {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 700,
            src: `url(${RobotoBold}) format('truetype')`,
          },
        ],
        body: {
          display: 'flex',
          flexDirection: 'column',
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          minHeight: '100vh',
        },
      },
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
