import React, { useEffect } from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { useAppSelector } from '../../store/store'

export default function UserPage(){
  const user = useAppSelector(state => state.auth.user)
  return (
    <div className='PageFade'>
      <SectionTitle title='Configurações' subtitle='Gerencie dados de usuário, privacidade, temas e muito mais'/>
      <h2>Dados do usuário:</h2>
      <p>Nick: {user.username}</p>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Registrado em {user.createdAt}</p>
      <p>Último grupo de serviço: {user.lastUserWorkGroup}</p>
    </div>
  )
}