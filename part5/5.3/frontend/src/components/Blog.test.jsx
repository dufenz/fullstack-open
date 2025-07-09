import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Blog from './Blog'
import { vi } from 'vitest'

const blog = {
  title: 'Test Blog Title',
  author: 'Test Author',
  url: 'https://testurl.com',
  likes: 10,
  user: {
    name: 'Test User'
  }
}

test('calls handleLike twice when like button is clicked twice', () => {
  const mockHandler = vi.fn()

  render(<Blog blog={blog} handleLike={mockHandler} />)

  // Открываем детали
  const viewButton = screen.getByText('view')
  fireEvent.click(viewButton)

  // Дважды нажимаем like
  const likeButton = screen.getByText('like')
  fireEvent.click(likeButton)
  fireEvent.click(likeButton)

  // Проверяем количество вызовов
  expect(mockHandler).toHaveBeenCalledTimes(2)
})
