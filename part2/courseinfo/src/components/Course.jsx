const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <b>total of {sum} exercises</b>

const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) =>
  <>
    {parts.map(part =>
      <Part
        key={part.id} part={part}
      />
    )}
  </>

const Course = (props) => {
  console.log(props)

  const { name, parts } = props.course;

  const total = parts.reduce((s, p) => s + p.exercises, 0)

  return (
    <>
      <Header course={name} />
      <Content parts={parts} />
      <Total sum={total} />
    </>
  )
}

export default Course