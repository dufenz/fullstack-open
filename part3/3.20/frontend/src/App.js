Set-Content .\src\App.js @"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios.get('/api/persons').then(res => setPersons(res.data))
  }, [])

  return (
    <div>
      <h1>Phonebook</h1>
      <ul>
        {persons.map(p => <li key={p.id}>{p.name}: {p.number}</li>)}
      </ul>
    </div>
  )
}

export default App
"@
