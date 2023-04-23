import React from 'react'

interface Props{
  id: number;
  number: number;
  chairs: number;
  isBusy: boolean,
}

export default function TableRow(props: Props){
  return(
    <tr>
      <td>{props.number}</td>
      <td>{props.chairs}</td>
      <td>{props.isBusy ? 'Em uso' : 'Desocupada'}</td>
      <td><button className='btn-sm btn-warning'>Desocupar</button></td>
    </tr>
  )
}