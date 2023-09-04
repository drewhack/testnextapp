import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/app/hooks'
import { decrement, increment } from './counterSlice'


export function Counter() {
    //const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()
    // this is just to get rid of it
    const count = 1

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}