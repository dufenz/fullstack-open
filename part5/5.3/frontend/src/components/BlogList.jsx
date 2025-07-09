import Blog from './Blog'

const BlogList = ({ blogs, currentUser, updateBlog, deleteBlog }) => {
  return (
    <div>
      {blogs
        .slice()
        .sort((a, b) => b.likes - a.likes)
        .map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            currentUser={currentUser}
            updateBlog={updateBlog}
            deleteBlog={deleteBlog}
          />
        ))}
    </div>
  )
}

export default BlogList
