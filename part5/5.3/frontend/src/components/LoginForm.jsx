import React from 'react'
import useField from '../hooks/useField'

const LoginForm = ({ onLogin }) => {
  const username = useField('text')
  const password = useField('password')

  const handleSubmit = (event) => {
    event.preventDefault()
    onLogin({
      username: username.value,
      password: password.value,
    })

    // очистка полей
    username.reset()
    password.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type={username.type}
          value={username.value}
          onChange={username.onChange}
          placeholder="username"
        />
      </div>
      <div>
        <input
          type={password.type}
          value={password.value}
          onChange={password.onChange}
          placeholder="password"
        />
      </div>
      <button type="submit">login</button>
    </form>
  )
}

export default LoginForm
