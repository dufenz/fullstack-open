import { render, screen, fireEvent } from '@testing-library/react'
import Blog from './Blog'
import React from 'react'

const blog = {
  title: 'Test Blog',
  author: 'Test Author',
  url: 'http://test.url',
  likes: 5,
  user: {
    username: 'testuser',
    name: 'Test User',
  },
}

const currentUser = { username: 'testuser' }

test('renders title and author by default', () => {
  render(<Blog blog={blog} currentUser={currentUser} />)
  expect(screen.getByText((content) =>
    content.includes('Test Blog') && content.includes('Test Author')
  )).toBeDefined()
  expect(screen.queryByText('http://test.url')).toBeNull()
})

test('clicking view shows url and likes', () => {
  render(<Blog blog={blog} currentUser={currentUser} />)
  fireEvent.click(screen.getByText('view'))
  expect(screen.getByText('http://test.url')).toBeDefined()
  expect(screen.getByText('likes 5')).toBeDefined()
})

test('clicking like twice calls handler twice', () => {
  const mockHandler = vi.fn()
  render(<Blog blog={blog} onLike={mockHandler} currentUser={currentUser} />)
  fireEvent.click(screen.getByText('view'))
  const likeBtn = screen.getByText('like')
  fireEvent.click(likeBtn)
  fireEvent.click(likeBtn)
  expect(mockHandler).toHaveBeenCalledTimes(2)
})
