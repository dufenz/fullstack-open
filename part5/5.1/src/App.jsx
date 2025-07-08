import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])
  const [message, setMessage] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, { username, password })
      setUser(res.data)
      setMessage(`Welcome ${res.data.name}`)
      const saved = JSON.stringify(res.data)
      window.localStorage.setItem('loggedBlogAppUser', saved)
    } catch {
      setMessage('Login failed')
    }
  }

  useEffect(() => {
    const logged = window.localStorage.getItem('loggedBlogAppUser')
    if (logged) {
      const user = JSON.parse(logged)
      setUser(user)
      axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`
    }
  }, [])

  useEffect(() => {
    if (user) {
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/blogs`)
        .then(res => setBlogs(res.data))
    }
  }, [user])

  if (!user) return (
    <div>
      <h2>Log in to application</h2>
      <form onSubmit={handleLogin}>
        <div>username <input value={username} onChange={({target})=>setUsername(target.value)} /></div>
        <div>password <input type="password" value={password} onChange={({target})=>setPassword(target.value)} /></div>
        <button type="submit">login</button>
      </form>
      <p>{message}</p>
    </div>
  )

  return (
    <div>
      <h2>blogs</h2>
      <p>{user.name} logged in <button onClick={() => { window.localStorage.removeItem('loggedBlogAppUser'); setUser(null); }}>logout</button></p>
      {blogs.map(b =>
        <div key={b.id}>{b.title} {b.author}</div>
      )}
    </div>
  )
}

export default App
