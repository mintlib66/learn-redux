import React from 'react'

// 프리젠테이셔널 컴포넌트
// 리덕스 스토어에 직접 접근 않고 필요 값/함수만 props로 받아와 사용
// UI 선언에 집중

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  //value가 문자열 타입이므로 숫자로 변환 필요
  const onChange = e => {
    onSetDiff(parseInt(e.target.value, 10))
  }

  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} min="1" onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  )
}

export default Counter
