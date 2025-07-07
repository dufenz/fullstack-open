const Notification = ({ message }) => {
  if (!message) return null

  const baseStyle = {
    background: 'lightgrey',
    fontSize: 20,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    border: '2px solid',
  }

  const style = {
    ...baseStyle,
    color: message.type === 'error' ? 'red' : 'green',
    borderColor: message.type === 'error' ? 'red' : 'green',
  }

  return <div style={style}>{message.text}</div>
}

export default Notification
