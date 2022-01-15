import React, { createContext, useEffect, useState } from 'react'
import pairs from '../../pairs.json'

const GameContext = createContext({})

export function GameContenxtProvider({ children }) {
  
  const [pairs, setPairs] = useState(pairs)
  const [players, setPlayers] = useState([])
  const [activePlayerId, setActivePlayerId] = useState(null)
  const [rightPairsIds, setRightPairsIds] = useState([])
  const [activeItemId, setActiveItemId] = useState(null)

  useEffect(() => {
    function shufflePairs() {
      // Embaralhar os pares antes e renderizá-los, apenas na primeira vez
    }
    shufflePairs()
  }, []) 

  function activeteItem() {
    // Se for o segundo ID a ser clicado, então verifyIfEquals
    // Colocar o ID do par clicado no estado
  }

  function verifyIfEquals() {
    // Verificar se os IDS dos pares clicados são iguais
    // Se for igual, então incrementar a vez do player da vez
    // Virar todos os pares ainda não acertados
  }

  function finishGame() {
    // Resetar todos os estados e ir para página de jogo finalizado
  }

  function resetGame() {
    // Resetar os pares acertados e a pontuação
  }

  function newGame() {
    // Direcionar para a página de jogo e recomeçar o estado
  }

  
  return (
    <GameContext.Provider value={{}}>
      { children }
    </GameContext.Provider>
  )
}

export default GameContext