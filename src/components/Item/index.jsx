import React from 'react'

import * as Feather from 'react-icons/fi'

import {
  PairContainer
} from './styles'

export default function Item({show, value}) {
  const Icon = Feather[value]
  return (
    <PairContainer className={show ? 'show' : ''}>
      <Icon size={20} />
    </PairContainer>
  )
}