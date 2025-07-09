const login = async ({ username, password }) => {
  return {
    username,
    token: 'fake-token-123',
  }
}

export default { login }
