// 액션 타입 정의
const ADD_TODO = 'todos/ADD_TODO'
const TOGGLE_TODO = 'todos/TOGGLE_TODO'

// 액션 생성함수
let nextId = 1
export const addTodo = text => ({
  type: ADD_TODO,
  todo: {
    id: nextId++, //새 항목 추가 후 +1
    text,
  },
})
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
})

// 초기상태 선언
const initialState = [
  {
    id: 1,
    text: 'test text',
    done: false,
  },
]

// 리듀서 선언
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo)
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      )
    default:
      return state
  }
}
