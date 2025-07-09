import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001'

import Togglable from './components/Togglable.jsx'
import BlogForm from './components/BlogForm.jsx'

const Notification = ({ message, isError }) => {
  if (!message) return null
  const style = { color: isError ? 'red' : 'green', border: '1px solid', padding: 10, marginBottom: 10 }
  return <div style={style}>{message}</div>
}

function App() {
  const [blogs, setBlogs] = useState([])
  const [notification, setNotification] = useState(null)
  const [error, setError] = useState(false)
  const togglableRef = useRef()

  useEffect(() => {
    axios.get('/api/blogs').then(res => setBlogs(res.data))
  }, [])

  const notify = (msg, isErr = false) => {
    setNotification(msg); setError(isErr)
    setTimeout(() => setNotification(null), 5000)
  }

  const createBlog = async blogObject => {
    try {
      const res = await axios.post('/api/blogs', { ...blogObject, likes: 0 })
      setBlogs(blogs.concat(res.data))
      togglableRef.current.toggleVisibility()
      notify(`Added "${res.data.title}"`)
    } catch {
      notify('Error creating blog', true)
    }
  }

  return (
    <div>
      <h2>Bloglist 5.6</h2>
      <Notification message={notification} isError={error} />

      <Togglable buttonLabel="create new blog" ref={togglableRef}>
        <BlogForm createBlog={createBlog} />
      </Togglable>

      <ul>
        {blogs.map(b => <li key={b.id}>{b.title} by {b.author}</li>)}
      </ul>
    </div>
  )
}

export default App
