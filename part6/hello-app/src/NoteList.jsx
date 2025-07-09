import React, { useEffect, useState } from 'react'
import noteService from './services/noteService.js'

const NoteList = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    noteService.getAll().then(setNotes)
  }, [])

  const handleDelete = async (id) => {
    await noteService.remove(id)
    setNotes(notes.filter(note => note.id !== id))
  }

  return (
    <div>
      {notes.map(note => (
        <div key={note.id}>
          <p>{note.content}</p>
          <button onClick={() => handleDelete(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default NoteList
