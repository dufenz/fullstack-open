import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001'

import Togglable from './components/Togglable.jsx'

const Notification = ({ message, isError }) => {
  if (!message) return null
  const style = { 
    color: isError ? 'red' : 'green',
    border: '1px solid',
    padding: 10,
    marginBottom: 10
  }
  return <div style={style}>{message}</div>
}

function App() {
  const [blogs, setBlogs] = useState([])
  const [notification, setNotification] = useState(null)
  const [error, setError] = useState(false)
  const [inputs, setInputs] = useState({ title: '', author: '', url: '' })
  const togglableRef = useRef()

  useEffect(() => {
    axios.get('/api/blogs').then(res => setBlogs(res.data))
  }, [])

  const notify = (msg, isError = false) => {
    setNotification(msg)
    setError(isError)
    setTimeout(() => setNotification(null), 5000)
  }

  const handleCreate = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/blogs', { ...inputs, likes: 0 })
      setBlogs(blogs.concat(res.data))
      togglableRef.current.toggleVisibility()
      notify(`Added "${res.data.title}"`)
      setInputs({ title: '', author: '', url: '' })
    } catch {
      notify('Error creating blog', true)
    }
  }

  return (
    <div>
      <h2>Bloglist 5.5</h2>
      <Notification message={notification} isError={error} />

      <Togglable buttonLabel="create new blog" ref={togglableRef}>
        <form onSubmit={handleCreate}>
          <div>title <input value={inputs.title} onChange={e => setInputs({ ...inputs, title: e.target.value })} /></div>
          <div>author <input value={inputs.author} onChange={e => setInputs({ ...inputs, author: e.target.value })} /></div>
          <div>url <input value={inputs.url} onChange={e => setInputs({ ...inputs, url: e.target.value })} /></div>
          <button type="submit">create</button>
        </form>
      </Togglable>

      <ul>
        {blogs.map(b => <li key={b.id}>{b.title} by {b.author}</li>)}
      </ul>
    </div>
  )
}

export default App
