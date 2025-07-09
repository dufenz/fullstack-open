// src/App.test.jsx
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

beforeEach(() => {
  localStorage.clear()
})

test('login form submits credentials and stores user in localStorage', async () => {
  render(<App />)

  const usernameInput = screen.getByPlaceholderText(/username/i)
  const passwordInput = screen.getByPlaceholderText(/password/i)
  const loginButton = screen.getByText('login')

  fireEvent.change(usernameInput, { target: { value: 'testuser' } })
  fireEvent.change(passwordInput, { target: { value: 'password' } })
  fireEvent.click(loginButton)

  setTimeout(() => {
    const storedUser = localStorage.getItem('loggedBlogappUser')
    expect(storedUser).toBeTruthy()
    const user = JSON.parse(storedUser)
    expect(user.username).toBe('testuser')
  }, 500)
})
