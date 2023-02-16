import React, { useEffect } from 'react'

interface UserProps{
  id: number
  username: string
}

export default function UserPage(props: UserProps){
  return (
    <div>
      <h1>Hello {props.username}</h1>
    </div>
  )
}