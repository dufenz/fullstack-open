import '@testing-library/jest-dom'
import { jest } from '@jest/globals'
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

const mockNotes = [
  { id: 1, content: 'Note from axios 1' },
  { id: 2, content: 'Note from axios 2' },
]

const mockRemove = jest.fn(() => Promise.resolve())

jest.unstable_mockModule('axios', () => ({
  default: {
    get: jest.fn(() => Promise.resolve({ data: mockNotes })),
    delete: mockRemove,
  },
}))

let NoteList

beforeAll(async () => {
  NoteList = (await import('./NoteList.jsx')).default
})

test('renders notes from mocked axios', async () => {
  render(<NoteList />)

  expect(await screen.findByText('Note from axios 1')).toBeInTheDocument()
  expect(await screen.findByText('Note from axios 2')).toBeInTheDocument()
})

test('deletes a note when delete button is clicked', async () => {
  render(<NoteList />)

  const deleteButtons = await screen.findAllByText('Delete')
  fireEvent.click(deleteButtons[0])

  expect(mockRemove).toHaveBeenCalledWith(1)
  // После удаления первый элемент пропадает
  expect(screen.queryByText('Note from axios 1')).not.toBeInTheDocument()
})
