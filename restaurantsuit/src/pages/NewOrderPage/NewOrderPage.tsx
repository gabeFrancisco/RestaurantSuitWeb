import React from 'react'
import SectionTitle from '../../widgets/SectionTitle/SectionTitle'
import OrderForm from '../../components/OrderForm/OrderForm'

export default function NewOrderPage(){
  return(
    <div className='PageFade'>
      <SectionTitle title='Novo pedido'/>
      <OrderForm isEdit={false}/>
    </div>
  )
}