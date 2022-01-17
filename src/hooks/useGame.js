import { useEffect, useState, createContext } from 'react'

const GameContext = createContext({})

import items44 from '../../items44.json'
import items66 from '../../items66.json'

export default function useGame(type, players, grid) {

  const initialPlayersPoints = [...new Array(players)].map(() => 0)
  
  const [pairs, setPairs] = useState([])
  const [playersPoints, setPlayersPoints] = useState(initialPlayersPoints)
  const [activePlayerIndex, setActivePlayerIndex] = useState(0)
  const [rightValues, setRightValues] = useState([])
  const [activeItemsIndex, setActiveItemsIndex] = useState([])
  
  const [isGameFinished, setIsGameFinished] = useState(false)
  const [pause, setPause] = useState(false)

  const shuffle = array => array.sort(() => Math.random() - 0.5)

  useEffect(() => {
  

    function duplicateNumbers() {
      const amountOfItems = grid ** 2 / 2
      const newPairs = []
      for (let i = 0; i < amountOfItems * 2; i++) {
        const value = i < amountOfItems ? i + 1 : i + 1 - amountOfItems
        newPairs[i] = { id: i, value: String(value) }
      }
      shuffle(newPairs)
      setPairs(newPairs)
    }
    
    function duplicateItems() {
      const items = grid === 4 ? items44 : items66
      const newPairs = [...items]
      for (let i = items.length; i < items.length * 2; i++) {
        newPairs[i] = {...items[i - items.length], id: i + 1}
      }
      shuffle(newPairs)
      setPairs(newPairs)
    }
    
    if (type === 'numbers') {
      duplicateNumbers(grid)
    } 
    if (type === 'icons') {
      duplicateItems(grid)
    }

  }, [])

  useEffect(() => {
    if (activeItemsIndex.length !== 2) {
      return
    }

    function resetPlay() {
      setPause(false)
      setActiveItemsIndex([])
    }

    function passPlayer() {
      let newPlayerIndex = activePlayerIndex + 1
      if (newPlayerIndex === players) {
        newPlayerIndex -= players
      }
      setActivePlayerIndex(newPlayerIndex)
    }

    setPause(true)
    const timeout = setTimeout(() => {
      resetPlay()
      passPlayer()
    }, 2000)

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

  useEffect(() => {
    const totalPoints = playersPoints.reduce((acc, points) => acc + points)
    const amountOfPairs = grid ** 2 / 2
    if (totalPoints === amountOfPairs) {
      finishGame()
    }
  }, [playersPoints])

  function activeteItem(itemId) {
    const itemIndex = pairs.findIndex(item => item.id === itemId)
    if (rightValues.includes(pairs[itemIndex].value)) return
    if (activeItemsIndex.includes(itemIndex)) return
    setActiveItemsIndex(activeItemsIndex => [...activeItemsIndex, itemIndex])
  }

  function verifyIfEquals() {
    const firstValue = pairs[activeItemsIndex[0]].value
    const secondValue = pairs[activeItemsIndex[1]].value
    return firstValue === secondValue ? firstValue : false
  }

  function finishGame() {
    resetItems()
    setIsGameFinished(true)
  }

  function resetItems() {
    setActiveItemsIndex([])
    setRightValues([])
    setActivePlayerIndex(0)
  }

  function resetGame() {
    if (!confirm('Deseja mesmo resetar o jogo?')) return
    resetItems()
    setPlayersPoints(initialPlayersPoints)
    setIsGameFinished(false)
    const newPairs = [...pairs]
    shuffle(newPairs)
    setPairs(newPairs)
  }

  function onItemClick(itemId) {
    if (pause) return
    activeteItem(itemId)
  }

  return {
    pairs, 
    activePlayerIndex, rightValues, activeItemsIndex, playersPoints,
    finishGame, resetGame, onItemClick, isGameFinished
  }
}
