import { useEffect, useState } from 'react'

import items44 from '../../items44.json'
import items66 from '../../items66.json'

export default function useGame(initialType, players, grid) {

  const initialPlayersPoints = [...new Array(players)].map(() => 0)
  
  const [pairs, setPairs] = useState([])
  const [playersPoints, setPlayersPoints] = useState(initialPlayersPoints)
  const [activePlayerIndex, setActivePlayerIndex] = useState(0)
  const [rightValues, setRightValues] = useState([])
  const [activeItemsIndex, setActiveItemsIndex] = useState([])
  const [gridLength, setGridLength] = useState(grid)
  const [type, setType] = useState(initialType)

  const [pause, setPause] = useState(false)

  const shuffle = array => array.sort(() => Math.random() - 0.5)

  useEffect(() => {
  

    function duplicateNumbers() {
      const amountOfItems = gridLength ** 2 / 2
      const newPairs = []
      for (let i = 0; i < amountOfItems * 2; i++) {
        const value = i < amountOfItems ? i + 1 : i + 1 - amountOfItems
        newPairs[i] = { id: i, value: String(value) }
      }
      shuffle(newPairs)
      setPairs(newPairs)
    }
    
    function duplicateItems() {
      const items = gridLength === 4 ? items44 : items66
      const newPairs = [...items]
      for (let i = items.length; i < items.length * 2; i++) {
        newPairs[i] = {...items[i - items.length], id: i + 1}
      }
      shuffle(newPairs)
      setPairs(newPairs)
    }
    
    if (type === 'numbers') {
      duplicateNumbers(gridLength)
    } 
    if (type === 'icons') {
      duplicateItems(gridLength)
    }

  }, [])

  useEffect(() => {
    if (activeItemsIndex.length !== 2) {
      return
    }

    function resetPlay() {
      setPause(false)
      setActiveItemsIndex([])
      let newPlayerIndex = activePlayerIndex + 1
      if (newPlayerIndex === players) {
        newPlayerIndex -= players
      }
      setActivePlayerIndex(newPlayerIndex)
    }

    setPause(true)
    const timeout = setTimeout(resetPlay, 2000)

    const rightValue = verifyIfEquals()

    if (rightValue) {
      clearTimeout(timeout)
      resetPlay()
      setPlayersPoints(playersPoints => playersPoints.map(
        (points, index) => index === activePlayerIndex ? points + 1 : points)
      )
      setRightValues(rightValues => [...rightValues, rightValue])
    }

    return () => clearTimeout(timeout)

  }, [activeItemsIndex])

  function activeteItem(itemId) {
    const itemIndex = pairs.findIndex(item => item.id === itemId)
    if (activeItemsIndex.includes(itemIndex)) return
    setActiveItemsIndex(activeItemsIndex => [...activeItemsIndex, itemIndex])
  }

  function verifyIfEquals(itemId) {
    const firstValue = pairs[activeItemsIndex[0]].value
    const secondValue = pairs[activeItemsIndex[1]].value
    return firstValue === secondValue ? firstValue : false
  }

  function finishGame() {
    // Navegar para a página de fim de jogo
  }

  function resetGame() {
    if (!confirm('Deseja mesmo resetar o jogo?')) return
    setActiveItemsIndex([])
    setPlayersPoints(initialPlayersPoints)
    setRightValues([])
    setActivePlayerIndex(0)
    const newPairs = [...pairs]
    shuffle(newPairs)
    setPairs(pairs)
  }

  function newGame() {
    if (!confirm('Deseja mesmo acabar o jogo?')) return
    // Navegar para a página de próximo jogo
  }

  function onItemClick(itemId) {
    if (pause) return
    activeteItem(itemId)
  }

  return {
    pairs,type, gridLength, 
    activePlayerIndex, rightValues, activeItemsIndex, playersPoints,
    finishGame, resetGame, newGame, onItemClick
  }
}