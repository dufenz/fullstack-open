import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const handleLeftClick = () => setLeft(left + 1)
  const handleRightClick = () => setRight(right + 1)
  const handleReset = () => {
    setLeft(0)
    setRight(0)
  }

  return (
    <div>
      <p>Left: {left}</p>
      <p>Right: {right}</p>
      <Button handleClick={handleLeftClick} text="Left" />
      <Button handleClick={handleRightClick} text="Right" />
      <Button handleClick={handleReset} text="Reset" />
    </div>
  )
}

export default App
