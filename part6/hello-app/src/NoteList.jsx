import React, { useEffect, useState } from 'react'
import noteService from './services/noteService'

const NoteList = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    noteService.getAll().then(data => setNotes(data))
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
