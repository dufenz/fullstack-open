const Notification = ({ message }) => {
  if (message === null) return null

  const style = {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    border: '2px solid red',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }

  return <div style={style}>{message}</div>
}

export default Notification
