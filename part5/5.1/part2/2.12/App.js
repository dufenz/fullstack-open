const toggleImportance = (id) => {
  const note = notes.find(n => n.id === id)
  if (!note) return

  const changedNote = { ...note, important: !note.important }

  noteService
    .update(id, changedNote)
    .then(returnedNote => {
      setNotes(notes.map(n => n.id !== id ? n : returnedNote))
    })
    .catch(error => {
      alert(`Note '${note.content}' was already removed from server`)
      setNotes(notes.filter(n => n.id !== id))
    })
}
