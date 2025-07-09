import React from 'react'
import { render, screen } from '@testing-library/react'
import NoteList from './NoteList'
import axios from 'axios'

jest.mock('axios')

test('renders notes from mocked axios', async () => {
  const mockNotes = [
    { id: 1, content: 'Note from axios 1' },
    { id: 2, content: 'Note from axios 2' },
  ]

  axios.get.mockResolvedValue({ data: mockNotes })

  render(<NoteList />)

  expect(await screen.findByText('Note from axios 1')).toBeInTheDocument()
  expect(await screen.findByText('Note from axios 2')).toBeInTheDocument()
})
