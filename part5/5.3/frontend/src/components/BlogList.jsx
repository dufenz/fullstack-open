// src/components/BlogList.jsx
import React from 'react'
import Blog from './Blog'

const BlogList = ({ blogs, currentUser, likeBlog, deleteBlog }) => {
  const sortedBlogs = [...blogs].sort((a, b) => b.likes - a.likes)

  return (
    <div>
      {sortedBlogs.map(blog => (
        <Blog
          key={blog.id}
          blog={blog}
          currentUser={currentUser}
          likeBlog={likeBlog}
          deleteBlog={deleteBlog}
        />
      ))}
    </div>
  )
}

export default BlogList
