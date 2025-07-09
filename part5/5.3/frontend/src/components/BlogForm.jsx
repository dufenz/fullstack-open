import React, { useState } from 'react'

const BlogForm = ({ createBlog }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    createBlog({ title, author, url })
    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        title: <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        author: <input id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div>
        url: <input id="url" value={url} onChange={(e) => setUrl(e.target.value)} />
      </div>
      <button type="submit">create</button>
    </form>
  )
}

export default BlogForm
