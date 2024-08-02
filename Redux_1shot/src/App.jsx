import React from 'react'
import AddTodos from './Components/AddTodos'
import Todos from './Components/Todos'

export default function App() {
  return (
    <>
    <div className='bg-neutral-500 flex items-center flex-col h-screen w-screen'>
      <AddTodos/>
      <Todos/>
    </div>
    </>
  )
}