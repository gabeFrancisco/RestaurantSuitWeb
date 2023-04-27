import React from 'react'
import { ProductOrder } from '../../models/interfaces/ProductOrder'

export default function ProductOrderRow({ props }: { props: ProductOrder }){
  const productTotal = props.quantity * props.product.price;
  return(
    <tr>
      <td>{props.product.name}</td>
      <td>{props.product.categoryName}</td>
      <td>R${props.product.price.toFixed(2)}</td>
      <td>{props.quantity}</td>
      <td>R${productTotal.toFixed(2)}</td>
    </tr> 
  )
}