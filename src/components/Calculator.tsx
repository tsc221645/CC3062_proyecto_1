import Display from './Display'
import Keypad from './Keypad.tsx'
import useCalculator from './useCalculator.ts'

export default function Calculator () {
  const { display, handleInput } = useCalculator()
  return (
    <div className='calculator'>
      <Display value={display} />
      <Keypad onInput={handleInput} />
      <img src="/src/assets/capi1.png" alt="Capibara" className="emoji-capibara" />

    </div>
  )
}
