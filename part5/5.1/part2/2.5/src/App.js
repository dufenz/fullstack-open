import { useState } from 'react'

const App = () => {
  const [notes, setNotes] = useState([
    { id: 1, content: 'HTML is easy' },
    { id: 2, content: 'Browser can execute only JavaScript' },
    { id: 3, content: 'GET and POST are the most important methods of HTTP protocol' }
  ])

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
          <li key={note.id}>{note.content}</li>
        )}
      </ul>
    </div>
  )
}

export default App
