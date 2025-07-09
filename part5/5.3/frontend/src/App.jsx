import React, { useState, useEffect } from 'react'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001'

function App() {
  const [blogs, setBlogs] = useState([])
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    axios.get('/api/blogs').then(res => setBlogs(res.data))
  }, [])

  const addBlog = async e => {
    e.preventDefault()
    const res = await axios.post('/api/blogs', { title, author, url, likes: 0 })
    setBlogs(blogs.concat(res.data))
    setTitle(''); setAuthor(''); setUrl('')
  }

  return (
    <div>
      <h2>Bloglist 5.3</h2>
      <form onSubmit={addBlog}>
        <div>title <input value={title} onChange={e => setTitle(e.target.value)} /></div>
        <div>author <input value={author} onChange={e => setAuthor(e.target.value)} /></div>
        <div>url <input value={url} onChange={e => setUrl(e.target.value)} /></div>
        <button type="submit">create</button>
      </form>
      <ul>
        {blogs.map(b => (
          <li key={b.id}>{b.title} by {b.author}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
