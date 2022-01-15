import React, { useState, useEffect } from 'react'

import Header from '../../components/Header'

import items from '../../../items.json'

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

  const [pairs, setPairs] = useState([])
  const playersPoints = [0, 0, 1, 0, 0]
  const activePlayerIndex = 0 // Jogador que está jogando
  const activeItemsIndex = [5] // Mostrar ao clicar
  const rightValues = ['FiCodesandbox'] // Permacener mostrando ao acertar

  useEffect(() => {
    function duplicateItems() {
      const newPairs = [...items]
      const shuffle = array => array.sort(() => Math.random() - 0.5)
      for (let i = items.length; i < items.length * 2; i++) {
        newPairs[i] = {...items[i - items.length], id: i + 1}
      }
      shuffle(newPairs)
      setPairs(newPairs)
    }
    duplicateItems()
  }, [])
  
  return (
    <Container>
      <Header />
      <PairsContainer>
        <PairsGrid>
        {pairs.map((item) => ( 
          <Item 
            value={item.value} 
            key={item.id} 
            show={activeItemsIndex.includes(item.id) || rightValues.includes(item.value)} />
        ))}
        </PairsGrid>
      </PairsContainer>
      <PlayersContainer numberOfPlayers={playersPoints.length}>
        {playersPoints.map((points, index) => (
          <Player active={activePlayerIndex === index} name={`Player ${index + 1}`} points={points} />
        ))}
      </PlayersContainer>
    </Container>
  )
}