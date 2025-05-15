import { render, fireEvent } from '@testing-library/react'
import Calculator from './Calculator'
import { expect, test } from 'vitest'

test('suma simple 2 + 2', () => {
  const { getByText } = render(<Calculator />)
  fireEvent.click(getByText('2'))
  fireEvent.click(getByText('+'))
  fireEvent.click(getByText('2'))
  fireEvent.click(getByText('='))
  expect(getByText('4')).toBeInTheDocument()
})
