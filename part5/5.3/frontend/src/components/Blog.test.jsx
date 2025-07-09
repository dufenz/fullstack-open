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

test('shows url and likes when view button is clicked', () => {
  render(<Blog blog={blog} handleLike={vi.fn()} />)

  // Нажимаем кнопку "view"
  const button = screen.getByText('view')
  fireEvent.click(button)

  // Теперь должны появиться url и likes
  expect(screen.getByText('https://testurl.com')).toBeDefined()
  expect(screen.getByText(/likes: 10/i)).toBeDefined()
})
