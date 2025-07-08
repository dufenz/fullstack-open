const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((part, i) => (
        <p key={i}>
          {part.name} {part.exercises}
        </p>
      ))}
      <p><strong>Total of {total} exercises</strong></p>
    </div>
  )
}

export default App
