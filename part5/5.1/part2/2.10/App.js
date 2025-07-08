import { useState, useEffect } from 'react'
import NoteList from './NoteList'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  const toggleImportance = (id) => {
    const updatedNotes = notes.map(note =>
      note.id === id ? { ...note, important: !note.important } : note
    )
    setNotes(updatedNotes)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all'}
      </button>
      <NoteList notes={notesToShow} toggleImportance={toggleImportance} />
    </div>
  )
}

export default App
