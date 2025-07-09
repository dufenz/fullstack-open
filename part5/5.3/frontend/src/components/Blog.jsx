import React, { useState } from 'react'

const Blog = ({ blog, onLike, onRemove, currentUser }) => {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => setVisible(!visible)

  const handleLike = () => {
    onLike(blog)
  }

  const handleRemove = () => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}?`)) {
      onRemove(blog)
    }
  }

  return (
    <div className="blog" style={{ border: '1px solid black', padding: 5, marginBottom: 5 }}>
      <div>
        {blog.title} {blog.author}
        <button onClick={toggleVisibility}>{visible ? 'hide' : 'view'}</button>
      </div>
      {visible && (
        <div className="blog-details">
          <div>{blog.url}</div>
          <div>
            likes {blog.likes}
            <button onClick={handleLike}>like</button>
          </div>
          <div>{blog.user?.name}</div>
          {currentUser?.username === blog.user?.username && (
            <button onClick={handleRemove}>remove</button>
          )}
        </div>
      )}
    </div>
  )
}

export default Blog
