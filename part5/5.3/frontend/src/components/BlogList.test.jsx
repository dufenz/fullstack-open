// src/components/BlogList.test.jsx
import React from 'react'
import { render, screen } from '@testing-library/react'
import BlogList from './BlogList'

const blogs = [
  { id: '1', title: 'Least liked', author: 'A', likes: 1, url: '', user: {} },
  { id: '2', title: 'Most liked', author: 'B', likes: 100, url: '', user: {} },
  { id: '3', title: 'Medium liked', author: 'C', likes: 50, url: '', user: {} },
]

test('renders blogs in descending order of likes', () => {
  render(
    <BlogList
      blogs={blogs}
      currentUser={{}}
      likeBlog={() => {}}
      deleteBlog={() => {}}
    />
  )

  const renderedBlogs = screen.getAllByText(/liked/i, { exact: false })
  expect(renderedBlogs).toHaveLength(3)

  const titles = screen.getAllByText(/liked/i).map(el => el.textContent)

  expect(titles[0]).toContain('Most liked')
  expect(titles[1]).toContain('Medium liked')
  expect(titles[2]).toContain('Least liked')
})
