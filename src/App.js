import React from 'react'
import CounterContainer from './components/CounterContainer'
import './App.css'
import TodosContainer from './container/TodosContainer'

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  )
}

export default App
