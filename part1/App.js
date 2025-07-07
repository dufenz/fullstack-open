import { useState } from 'react'

const Display = ({ value }) => <p>{value}</p>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  const [value, setValue] = useState(0)

  const increaseByOne = () => setValue(value + 1)
  const decreaseByOne = () => setValue(value - 1)
  const resetToZero = () => setValue(0)

  return (
    <div>
      <Display value={value} />
      <Button handleClick={increaseByOne} text="+1" />
      <Button handleClick={resetToZero} text="reset" />
      <Button handleClick={decreaseByOne} text="-1" />
    </div>
  )
}

export default App
