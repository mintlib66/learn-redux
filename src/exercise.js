import { createStore } from 'redux'

const initialState = {
  counter: 0,
  text: '',
  list: [],
}

// 액션 타입 정의
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'
const CHANGE_TEXT = 'CHANGE_TEXT'
const ADD_TO_LIST = 'ADD_TO_LIST'

// 액션 생성함수 정의
function increase() {
  return {
    type: INCREASE, //액션 객체에는 type값 필수
  }
}

const decrease = () => ({
  type: DECREASE, //화살표 함수 표기가 더 간단
})

const changeText = text => ({
  type: CHANGE_TEXT,
  text,
})
const addToList = item => ({
  type: ADD_TO_LIST,
  item,
})

//리듀서 - 새로운 상태 생성 함수, 불변성 주의
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      }
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      }
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      }
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      }
    default:
      return state
  }
}

// 스토어 생성
const store = createStore(reducer)

console.log(store.getState()) //현재 store 상태 조회

//스토어 상태 변경 시 호출됨
const listener = () => {
  const state = store.getState()
  console.log(state)
}

const unsubscribe = store.subscribe(listener)

//액션 디스패치(액션 발생)
store.dispatch(increase())
store.dispatch(decrease())
store.dispatch(changeText('안녕하세요'))
store.dispatch(addToList({ id: 1, text: '와우' }))
