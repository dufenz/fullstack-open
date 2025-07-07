const Note = ({ note, toggleImportance }) => {
  return (
    <li>
      {note.content}
      <button onClick={() => toggleImportance(note.id)}>
        {note.important ? 'Make not important' : 'Make important'}
      </button>
    </li>
  )
}

export default Note
