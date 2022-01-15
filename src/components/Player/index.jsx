import React from 'react'

import {
  PlayerContainer
} from './styles'

export default function Player({name, points, active}) {
  return (
    <PlayerContainer className={active ? 'active' : ''}>
      <p>{name}</p>
      <strong>{points}</strong>
    </PlayerContainer>
  )
}