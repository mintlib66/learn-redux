import React, { useState } from 'react'

const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
  return (
    <li
      style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  )
})

const TodoList = React.memo(function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle}></TodoItem>
      ))}
    </ul>
  )
})

function Todos({ todos, onCreate, onToggle }) {
  const [text, setText] = useState('') //지엽적인 상태는 각자 관리
  const onChange = e => setText(e.target.value)
  const onSubmit = e => {
    e.preventDefault()
    onCreate(text)
    setText('') //인풋 창 초기화
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          placeholder="할 일 입력"
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  )
}

export default Todos
