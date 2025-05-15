import { useState } from 'react'

const MAX = 999999999
const MAX_LEN = 9

export default function useCalculator () {
  const [display, setDisplay] = useState('0')
  const [stack, setStack] = useState<string[]>([])

  const reset = () => {
    setDisplay('0')
    setStack([])
  }

  const handleInput = (input: string) => {
    if (display === 'ERROR') return reset()
    if (input === 'C') return reset()

    if (input === '=') {
      try {
        const expr = [...stack, display].join('')
        const result = eval(expr)
        const str = result.toString()
        if (result < 0 || result > MAX || str.length > MAX_LEN) {
          setDisplay('ERROR')
        } else {
          setDisplay(str.slice(0, MAX_LEN))
          setStack([])
        }
      } catch {
        setDisplay('ERROR')
      }
      return
    }

    if (['+', '-', '*', '/', '%'].includes(input)) {
      setStack([...stack, display, input])
      setDisplay('0')
      return
    }

    if (input === '+/-') {
      if (display.startsWith('-')) return setDisplay(display.slice(1))
      if (display.length < MAX_LEN) return setDisplay('-' + display)
      return
    }

    if (input === '.') {
      if (display.includes('.') || display.length >= MAX_LEN) return
      return setDisplay(display + '.')
    }

    if (display === '0') return setDisplay(input)
    if (display.length < MAX_LEN) setDisplay(display + input)
  }

  return { display, handleInput }
}
