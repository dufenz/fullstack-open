import React from 'react'
import { render, screen } from '@testing-library/react'
import NoteList from './NoteList'
import noteService from './services/noteService'

jest.mock('./services/noteService')  // подхватит __mocks__/noteService.js

test('renders mocked notes using noteService', async () => {
  noteService.getAll.mockResolvedValue([
    { id: 1, content: 'Note 1' },
    { id: 2, content: 'Note 2' }
  ])

  render(<NoteList />)

  expect(await screen.findByText('Note 1')).toBeInTheDocument()
  expect(await screen.findByText('Note 2')).toBeInTheDocument()
})
