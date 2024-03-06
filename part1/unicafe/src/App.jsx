import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticsLine = props => <tr><td>{props.name}</td><td>{props.value}</td></tr>

const Statistics = ({good, neutral, bad, total}) => {
  if (total === 0) {
    return (
      <>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </>
    )
  }

  const getAverage = () => (good - bad) / (total || 1);

  const getPositive = () => good / (total || 1) * 100;

  return (
    <>
      <h2>statistics</h2>

      <table>
        <tbody>
          <StatisticsLine name={'good'} value={good} />
          <StatisticsLine name={'neutral'} value={neutral} />
          <StatisticsLine name={'bad'} value={bad} />
          <StatisticsLine name={'total'} value={total} />
          <StatisticsLine name={'average'} value={getAverage()} />
          <StatisticsLine name={'positive'} value={`${getPositive()} %`} />
        </tbody>
      </table>
    </>
  )
}

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

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
      />
    </div>
  )
}

export default App