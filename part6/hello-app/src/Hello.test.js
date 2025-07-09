// src/Hello.test.js
import React from 'react'
import { render, screen } from '@testing-library/react'
import Hello from './Hello'

test('renders name passed as prop', () => {
  render(<Hello name="Full Stack" />)
  expect(screen.getByText('Hello Full Stack')).toBeDefined()
})
