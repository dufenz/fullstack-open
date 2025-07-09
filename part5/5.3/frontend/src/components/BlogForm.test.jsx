import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import BlogForm from './BlogForm'
import { vi } from 'vitest'

test('calls onCreate with correct details when new blog is created', () => {
  const createBlog = vi.fn()

  const { getByPlaceholderText, getByText } = render(<BlogForm onCreate={createBlog} />)

  const titleInput = getByPlaceholderText('Enter title')
  const authorInput = getByPlaceholderText('Enter author')
  const urlInput = getByPlaceholderText('Enter URL')
  const createButton = getByText('Create')

  fireEvent.change(titleInput, { target: { value: 'Test Blog Title' } })
  fireEvent.change(authorInput, { target: { value: 'Jane Doe' } })
  fireEvent.change(urlInput, { target: { value: 'https://example.com' } })

  fireEvent.click(createButton)

  expect(createBlog).toHaveBeenCalledTimes(1)
  expect(createBlog).toHaveBeenCalledWith({
    title: 'Test Blog Title',
    author: 'Jane Doe',
    url: 'https://example.com',
  })
})
