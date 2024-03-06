import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Display = props => <>{props.name} {props.value}<br /></>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const setToValue = (newValue, setValue) => {
    setValue(newValue)
    setTotal(total + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => setToValue(good + 1, setGood)} text={'good'} />
      <Button handleClick={() => setToValue(neutral + 1, setNeutral)} text={'neutral'} />
      <Button handleClick={() => setToValue(bad + 1, setBad)} text={'bad'} />

      <h2>statistics</h2>
      <Display name={'good'} value={good} />
      <Display name={'neutral'} value={neutral} />
      <Display name={'bad'} value={bad} />
      <Display name={'total'} value={total} />
    </div>
  )
}

export default App