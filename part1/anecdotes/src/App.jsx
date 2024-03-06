import { useState } from 'react'

const Button = ({text, handleClick}) => {
  return <button onClick={handleClick}>{text}</button>
}

const Anecdote = ({title, anecdotes, votes, ind}) => {
  return (
    <>
      <h2>{title}</h2>
      {anecdotes[ind]}
      <br />
      {`has ${votes[ind]} votes`}
      <br />
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleNext = () => {
    const randInd = Math.floor(Math.random() * anecdotes.length);
    setSelected(randInd);
  }

  const handleVote = () => {
    const copy = [...votes];
    copy[selected]++;
    setVotes(copy);
  }

  const getMaxVotesInd = () => {
    return votes.findIndex(val => 
      val === votes.reduce((max, val) => Math.max(max, val))
    );
  }

  return (
    <div>
      <Anecdote
        title="Anecdote of the day"
        ind={selected}
        anecdotes={anecdotes}
        votes={votes}
      />
      <Button text='vote' handleClick={handleVote} />
      <Button text='next anecdote' handleClick={handleNext} />

      <Anecdote
        title="Anecdote with most votes"
        ind={getMaxVotesInd()}
        anecdotes={anecdotes}
        votes={votes}
      />
    </div>
  )
}

export default App