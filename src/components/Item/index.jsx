import React from 'react'

import * as Feather from 'react-icons/fi'

import {
  PairContainer
} from './styles'

export default function Item({show, value, type, active, ...props}) {
  const Icon = type === 'icons' && Feather[value]
  return (
    <PairContainer className={`${show ? 'show' : ''} ${active ? 'active' : ''}`} {...props}>
      {Icon ? <Icon size={30} /> : <p>{value}</p>}
    </PairContainer>
  )
} 