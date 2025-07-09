import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from './App'

beforeEach(() => {
  localStorage.clear()
})

test('login form submits credentials and stores user in localStorage', async () => {
  render(<App />)

  const usernameInput = screen.getByPlaceholderText(/username/i)
  const passwordInput = screen.getByPlaceholderText(/password/i)
  const loginButton = screen.getByText(/login/i)

  fireEvent.change(usernameInput, { target: { value: 'testuser' } })
  fireEvent.change(passwordInput, { target: { value: 'password' } })
  fireEvent.click(loginButton)

  await waitFor(() => {
    const storedUser = localStorage.getItem('loggedBlogAppUser')
    expect(storedUser).toBeTruthy()
    const user = JSON.parse(storedUser)
    expect(user.username).toBe('testuser')
  })
})
