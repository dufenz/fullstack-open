import { useState } from 'react'
import NoteList from './NoteList'

const App = () => {
  const [notes, setNotes] = useState([
    { id: 1, content: 'HTML is easy', important: true },
    { id: 2, content: 'Browser can execute only JavaScript', important: false },
    { id: 3, content: 'GET and POST are the most important methods of HTTP protocol', important: true }
  ])
  const [showAll, setShowAll] = useState(true)

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
