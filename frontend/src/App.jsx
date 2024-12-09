import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { CreateTodo } from '../components/CreateTodo'
import './App.css'
import { Todos } from '../components/Todos'

function App() {
  

  return (
   <div>
    <CreateTodo></CreateTodo>
    <Todos></Todos>
   </div>
  )
}

export default App
