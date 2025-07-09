import React from 'react'
import { render, screen } from '@testing-library/react'
import Note from './Note'

test('renders content of note', () => {
  render(<Note content="Test note content" />)
  expect(screen.getByText('Test note content')).toBeInTheDocument()
})
