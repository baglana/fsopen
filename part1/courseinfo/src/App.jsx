const Header = (props) => <h1>{props.course}</h1>;

const Content = (props) => {
  console.log(props)

  return <>
    <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
    <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
    <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
  </>
}

const Part = (props) => <p>{props.name} {props.exercises}</p>

const Total = (props) => {
  const exercises = props.parts.map(part => part.exercises);
  const total = exercises.reduce((sum, val) => sum + val);

  return (
    <p>Number of exercises {total}</p>
  )
}

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

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App