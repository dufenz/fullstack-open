import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import BlogForm from './BlogForm'
import { vi } from 'vitest'

test('calls onCreate with correct details when new blog is created', () => {
  const createBlog = vi.fn()

  const { getByLabelText, getByText } = render(<BlogForm onCreate={createBlog} />)

  const titleInput = getByLabelText('title:')
  const authorInput = getByLabelText('author:')
  const urlInput = getByLabelText('url:')
  const createButton = getByText('Create')

  fireEvent.change(titleInput, { target: { value: 'Test Title' } })
  fireEvent.change(authorInput, { target: { value: 'Author Name' } })
  fireEvent.change(urlInput, { target: { value: 'https://test.url' } })

  fireEvent.click(createButton)

  expect(createBlog).toHaveBeenCalledTimes(1)
  expect(createBlog).toHaveBeenCalledWith({
    title: 'Test Title',
    author: 'Author Name',
    url: 'https://test.url'
  })
})
