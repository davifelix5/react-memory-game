import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import theme from './themes/main'

import { ThemeProvider } from 'styled-components'

import Routes from './pages/routes'

function App() {
  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
          <main className='container'>
            <Routes />
          </main>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
