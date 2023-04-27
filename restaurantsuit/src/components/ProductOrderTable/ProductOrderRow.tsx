import React from 'react'
import { ProductOrder } from '../../models/interfaces/ProductOrder'

export default function ProductOrderRow({ productOrder }: { productOrder: ProductOrder }){
  const productTotal = productOrder.quantity * productOrder.product.price;
  return(
    <tr>
      <td>{productOrder.product.name}</td>
      <td>{productOrder.product.categoryName}</td>
      <td>R${productOrder.product.price.toFixed(2)}</td>
      <td>{productOrder.quantity}</td>
      <td>R${productTotal.toFixed(2)}</td>
    </tr> 
  )
}