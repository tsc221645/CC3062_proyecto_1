import { render, fireEvent, screen } from '@testing-library/react'
import Calculator from './Calculator'

//Test de operacion basica y estado de la capibara
test('2 + 2 muestra 4 y capibara feliz', () => {
  render(<Calculator />)
  fireEvent.click(screen.getByText('2'))
  fireEvent.click(screen.getByText('+'))
  fireEvent.click(screen.getByText('2'))
  fireEvent.click(screen.getByText('='))

  const display = screen.getByRole('region', { name: 'calculator-display' })
  expect(display).toHaveTextContent('4')
  expect(screen.getByAltText('happy')).toBeInTheDocument()
})

//Test de operación básica y y estado de la capibara 
test('2 - 3 muestra ERROR y capibara triste', () => {
  render(<Calculator />)
  fireEvent.click(screen.getByText('2'))
  fireEvent.click(screen.getByText('-'))
  fireEvent.click(screen.getByText('3'))
  fireEvent.click(screen.getByText('='))

  expect(screen.getByText('ERROR')).toBeInTheDocument()
  expect(screen.getByAltText('sad')).toBeInTheDocument()
})

// Test para mostart error al exceder el numero 999999999
test('resultado mayor a 999999999 muestra ERROR', () => {
  render(<Calculator />)

  const nineBtn = screen.getAllByRole('button').find(btn => btn.textContent === '9')
  expect(nineBtn).toBeTruthy()

  for (let i = 0; i < 9; i++) {
    fireEvent.click(nineBtn!)
  }

  fireEvent.click(screen.getByText('+'))
  fireEvent.click(screen.getByText('1'))
  fireEvent.click(screen.getByText('='))

  expect(screen.getByText('ERROR')).toBeInTheDocument()
  expect(screen.getByAltText('sad')).toBeInTheDocument()
})

// Test de estado de la capibara neutro
test('muestra capibara neutral mientras se escribe', () => {
  render(<Calculator />)
  fireEvent.click(screen.getByText('5'))
  expect(screen.getByAltText('neutral')).toBeInTheDocument()
})
