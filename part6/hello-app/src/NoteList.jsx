import React, { useEffect, useState } from 'react'
import noteService from './services/noteService'

const NoteList = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    noteService.getAll().then(data => setNotes(data))
  }, [])

  return (
    <ul>
      {notes.map(note => (
        <li key={note.id}>{note.content}</li>
      ))}
    </ul>
  )
}

export default NoteList
