import React from 'react'

import './SectionTitle.css'

interface Props{
  title: string,
  subtitle: string
}

export default function SectionTitle(props: Props){
  return(
    <div className='SectionTitle'>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <div className='Growing-Line'></div>
    </div>
  )
}