import React from 'react'
import { render, screen } from '@testing-library/react'
import Parent from './Parent'

// ⛔️ Замокали весь Child-компонент
jest.mock('./Child', () => () => <div>Mocked Child</div>)

test('renders parent and mocked child', () => {
  render(<Parent />)

  expect(screen.getByText('I am the parent')).toBeDefined()
  expect(screen.getByText('Mocked Child')).toBeDefined()
})
