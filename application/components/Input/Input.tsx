'use client'
import { useThemeContext } from 'context/theme'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

type InputType = {
  className?: string
  value: string
}

export default function Input({ value: val, className = '' }: InputType) {
  const { darkMode } = useThemeContext()
  const [value, setValue] = useState(val)

  const defaultClassname = `h-10 text-dBlack ${
    darkMode ? 'bg-gray-700' : 'bg-gray-200'
  } rounded-full pl-4 pr-8`

  return (
    <input
      type="text"
      className={twMerge(defaultClassname, className)}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}
