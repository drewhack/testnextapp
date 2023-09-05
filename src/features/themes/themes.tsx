import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/app/hooks'
import { setTheme } from './themeSlice'


export function ThemeSelector() {
    const theme = useAppSelector((state) => state.theme.value)
    const dispatch = useAppDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Dark"
          onClick={() => dispatch(setTheme('dark'))}
        >
          -DARK-
        </button>
        <span>{theme}</span>
        <button
          aria-label="Light"
          onClick={() => dispatch(setTheme('light'))}
        >
          -LIGHT-
        </button>
      </div>
    </div>
  )
}