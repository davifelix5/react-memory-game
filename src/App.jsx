import React from 'react'

import theme from './themes/main'

import { ThemeProvider } from 'styled-components'
import Game from './pages/Game'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <main className='container'>
        <Game />
      </main>
    </ThemeProvider>
  )
}

export default App
