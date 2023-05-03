'use client'
import { twMerge } from "tailwind-merge"
import Icon from "components/Icon/Icon"
import { TypesEnum, typeColors } from "types/type"
import { getFraction } from "utils/calc"

type TypeLabel = {
  type: TypesEnum,
  className?: string,
  multiplier?: number
}

export default function TypeLabel({ type, multiplier = 1, className = '' }: TypeLabel) {
  const handleMultiplier = () => {
    const { numerator, denominator } = getFraction(multiplier)
    if (multiplier === 0) return '0'
    return numerator < denominator ? `${numerator}/${denominator}` : multiplier
  }
  const defaultClass = 'rounded-full flex items-center justify-between p-2 bg-slate-100 shadow-md';
  const classes = twMerge(defaultClass, className)

  return (
    <div className={classes} style={{ backgroundColor: typeColors?.[type]?.bg, color: typeColors?.[type]?.text }}>
      <Icon img={`/types/${type}.png`} size={1.5}/>
      <span className='uppercase'>{type}</span>
      <span className='w-1/6 text-right pr-2'>{handleMultiplier()}x</span>
    </div>
  )
}
