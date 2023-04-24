import React from 'react'
import Column from '../Column/Column'
import { AlignItems, JustifyContent } from '../FlexProperties/FlexProperties'

interface Props{
  children?: JSX.Element | JSX.Element[]
}

export default function Center(props: Props){
  return(
    <Column alignItems={AlignItems.Center} justifyContent={JustifyContent.Center}>
      {props.children}
    </Column>
  )
}