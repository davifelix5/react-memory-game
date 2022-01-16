import { Route, Routes } from 'react-router-dom'

import Game from './Game'
import NewGame from './NewGame'

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" name="NewGame" element={<NewGame />} />
      <Route path="game" name="Game" element={<Game />} />
    </Routes>
  )
}