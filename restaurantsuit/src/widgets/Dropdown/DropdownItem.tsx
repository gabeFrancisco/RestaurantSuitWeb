import React from 'react'

import './DropdownItem.css'

interface Props{
  itemName: string,
  faIcon: string
}

export default function DropdownItem(props: Props){
  return(
    <li>
      <i className={props.faIcon}></i>{props.itemName}
    </li>
  )
}