export default function Display ({ value }: { value: string }) {
  return <div className='display' role="region" aria-label="calculator-display">{value}</div>
}
