const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3 }) => {
  return (
    <div>
      <p>{part1} — {exercises1} exercises</p>
      <p>{part2} — {exercises2} exercises</p>
      <p>{part3} — {exercises3} exercises</p>
    </div>
  )
}

const Total = ({ total }) => {
  return <p>Total exercises: {total}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
