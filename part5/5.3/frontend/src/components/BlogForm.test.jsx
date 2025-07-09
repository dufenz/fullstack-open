import { render, fireEvent } from '@testing-library/react'
import BlogForm from './BlogForm'
import React from 'react'

test('form calls createBlog with form data', () => {
  const createBlog = vi.fn()

  const { container } = render(<BlogForm createBlog={createBlog} />)

  const titleInput = container.querySelector('#title')
  const authorInput = container.querySelector('#author')
  const urlInput = container.querySelector('#url')
  const form = container.querySelector('form')

  fireEvent.change(titleInput, { target: { value: 'test title' } })
  fireEvent.change(authorInput, { target: { value: 'test author' } })
  fireEvent.change(urlInput, { target: { value: 'http://test.url' } })
  fireEvent.submit(form)

  expect(createBlog).toHaveBeenCalledTimes(1)
  expect(createBlog).toHaveBeenCalledWith({
    title: 'test title',
    author: 'test author',
    url: 'http://test.url',
  })
})
