const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <h1>{course}</h1>
      {parts.map((part, index) => (
        <p key={index}>
          {part.name} {part.exercises}
        </p>
      ))}
      <p>
        <strong>
          Total: {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises
        </strong>
      </p>
    </div>
  )
}

export default App
