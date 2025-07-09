import React from 'react'
import { render, screen } from '@testing-library/react'
import NoteList from './NoteList'
import noteService from './services/noteService'

jest.mock('./services/noteService') // ⬅ подключение мока

test('renders notes from mock', async () => {
  noteService.getAll.mockResolvedValue([
    { id: 1, content: 'Mocked Note 1' },
    { id: 2, content: 'Mocked Note 2' }
  ])

  render(<NoteList />)

  expect(await screen.findByText('Mocked Note 1')).toBeInTheDocument()
  expect(await screen.findByText('Mocked Note 2')).toBeInTheDocument()
})
