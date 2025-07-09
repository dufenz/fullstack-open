import React, { useEffect, useState } from 'react'
import { getAll } from './services/noteService.js'

const NoteList = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    getAll().then(setNotes)
  }, [])

  return (
    <div>
      {notes.map(note => (
        <p key={note.id}>{note.content}</p>
      ))}
    </div>
  )
}

export default NoteList
