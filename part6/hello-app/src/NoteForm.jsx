import React, { useState } from 'react'

const NoteForm = ({ onSubmit }) => {
  const [note, setNote] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(note)
    setNote('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write a note"
        value={note}
        onChange={({ target }) => setNote(target.value)}
      />
      <button type="submit">Save</button>
    </form>
  )
}

export default NoteForm
