import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import NoteForm from './NoteForm'

test('submits the form with correct input', () => {
  const mockSubmit = jest.fn()  // ← исправлено

  render(<NoteForm onSubmit={mockSubmit} />)

  const input = screen.getByPlaceholderText('Write a note')
  const button = screen.getByText('Save')

  fireEvent.change(input, { target: { value: 'testing note form' } })
  fireEvent.click(button)

  expect(mockSubmit).toHaveBeenCalledTimes(1)
  expect(mockSubmit).toHaveBeenCalledWith('testing note form')
})
