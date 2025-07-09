import React from 'react'
import useField from '../hooks/useField'

const BlogForm = ({ onCreate }) => {
  const title = useField('text')
  const author = useField('text')
  const url = useField('text')

  const handleSubmit = (event) => {
    event.preventDefault()
    onCreate({
      title: title.value,
      author: author.value,
      url: url.value,
    })
    // очистка после отправки
    title.reset()
    author.reset()
    url.reset()
  }

  const handleReset = (event) => {
    event.preventDefault()
    title.reset()
    author.reset()
    url.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type={title.type}
          value={title.value}
          onChange={title.onChange}
          placeholder="Enter title"
        />
      </div>
      <div>
        <input
          type={author.type}
          value={author.value}
          onChange={author.onChange}
          placeholder="Enter author"
        />
      </div>
      <div>
        <input
          type={url.type}
          value={url.value}
          onChange={url.onChange}
          placeholder="Enter URL"
        />
      </div>
      <button type="submit">Create</button>
      <button onClick={handleReset} type="button">Reset</button>
    </form>
  )
}

export default BlogForm
