import React, { useEffect, useState } from 'react'
import noteService from './services/noteService'

const NoteList = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    noteService.getAll().then(data => setNotes(data))
  }, [])

  return (
    <ul>
      {notes.map(n => <li key={n.id}>{n.content}</li>)}
    </ul>
  )
}

export default NoteList
