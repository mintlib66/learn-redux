import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Counter from './Counter'
import { increase, decrease, setDiff } from '../modules/counter'

// 컨테이너 컴포넌트
// 리덕스 스토어 상태 조회, 액션 디스패치

function CounterContainer() {
  //useSelector: 리덕스 스토어 상태조회 hook
  const { number, diff } = useSelector(state => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }))

  // useDispatch: 리덕스 스토어 dispatch를 함수에서 사용 hook
  const dispatch = useDispatch()

  const onIncrease = () => dispatch(increase())
  const onDecrease = () => dispatch(decrease())
  const onSetDiff = diff => dispatch(setDiff(diff))

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  )
}

export default CounterContainer
