import Display from './Display'
import Keypad from './Keypad.tsx'
import useCalculator from './useCalculator.ts'
import capyNeutral from '../assets/neutralcapi.png'
import capyHappy from '../assets/happycapi.png'
import capySad from '../assets/sadcapi.png'

export default function Calculator () {
  const { display, handleInput, capyMood } = useCalculator()
  const capyImg = {
    neutral: capyNeutral,
    happy: capyHappy,
    sad: capySad
  }[capyMood]
  return (
    <div className='calculator'>
      <img src={capyImg} alt={capyMood} className='capy-avatar' />
      <Display value={display} />
      <Keypad onInput={handleInput} />
    </div>
  )
}
