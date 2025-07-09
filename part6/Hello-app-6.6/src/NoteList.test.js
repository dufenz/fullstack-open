import '@testing-library/jest-dom'
import { jest } from '@jest/globals'
import React from 'react'
import { render, screen } from '@testing-library/react'

const mockNotes = [
  { id: 1, content: 'Note from axios 1' },
  { id: 2, content: 'Note from axios 2' },
]

jest.unstable_mockModule('axios', () => ({
  default: {
    get: jest.fn(() => Promise.resolve({ data: mockNotes })),
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
