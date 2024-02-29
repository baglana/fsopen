const Header = (props) => <h1>{props.course}</h1>;

const Content = (props) =>
  <>
    {
      props.parts.map((part, i) => (
          <p key={i}>
            {part} {props.exercises[i]}
          </p>
        )
      )
    }
  </>

const Total = (props) => {
  const total = props.exercises.reduce((sum, val) => sum + val);

  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const exercises = [exercises1, exercises2, exercises3]

  return (
    <div>
      <Header course={course}/>
      <Content parts={[part1, part2, part3]} exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  )
}

export default App