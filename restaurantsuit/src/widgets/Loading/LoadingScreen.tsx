import React from 'react'

import './LoadingScreen.css'
import { Loader } from './Loader'

export default function LoadingScreen(){
  return(
    <div className='LoadingScreen'>
      <Loader/>
    </div>
  )
}