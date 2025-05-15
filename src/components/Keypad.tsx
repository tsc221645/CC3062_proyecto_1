const keys = ['C', '+/-', '%', '/', '7', '8', '9', '*',
    '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']

export default function Keypad({ onInput }: { onInput: (k: string) => void }) {
    return (
        <div className='keypad'>
            {keys.map(k => (
                <button key={k} onClick={() => onInput(k)}>{k}</button>
            ))}
        </div>
    )
}
