import React, { useState, useEffect } from 'react'

import Header from '../../components/Header'

import items44 from '../../../items44.json'
import items66 from '../../../items66.json'

import {
  Container,
  PairsContainer,
  PairsGrid,
  PlayersContainer,
} from './styles'

import Item from '../../components/Item'
import Player from '../../components/Player'

export default function Game() {

  // Dados hard-coded para teste

  const type = 'icons' // numbers | icons
  const [pairs, setPairs] = useState([])
  const playersPoints = [0, 0, 1, 0, 0]
  const activePlayerIndex = 0 // Jogador que está jogando
  const activeItemsIndex = [5] // Mostrar ao clicar
  const rightValues = ['FiCloud'] // Permacener mostrando ao acertar
  const gridLength = 4

  useEffect(() => {
    const shuffle = array => array.sort(() => Math.random() - 0.5)

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
  
  return (
    <Container>
      <Header />
      <PairsContainer>
        <PairsGrid gridLength={gridLength}>
        {pairs.map((item) => { 
          const active = activeItemsIndex.includes(item.id)
          const show = active || rightValues.includes(item.value)
          console.log(show, item.value)
          return <Item
            type={type}
            value={item.value} 
            key={item.id} 
            show={show}
            active={active} 
          />
        })}
        </PairsGrid>
      </PairsContainer>
      <PlayersContainer numberOfPlayers={playersPoints.length}>
        {playersPoints.map((points, index) => {
          const name = `Player ${index + 1}` 
          return <Player 
            key={name}  
            active={activePlayerIndex === index} 
            name={name} 
            points={points} 
          />
        })}
      </PlayersContainer>
    </Container>
  )
}