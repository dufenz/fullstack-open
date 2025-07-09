import React from 'react'
import { render, screen } from '@testing-library/react'
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

test('renders title and author, but not url or likes by default', () => {
  const { container } = render(
    <Blog blog={blog} handleLike={vi.fn()} />
  )

  // Проверка: есть строка с title и author
  const summary = screen.getByText((content) =>
    content.includes('Test Blog Title') && content.includes('Test Author')
  )
  expect(summary).toBeDefined()

  // Проверка: url и likes скрыты
  const details = container.querySelector('.blogDetails')
  expect(details).toBeNull()
})
