import { useState } from 'react'


const Button = ({onClick, text})=>{
  return(
    <button onClick={onClick}>{text}</button>
  )
}

function App() {
   const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotoal] = useState(0)

  const handleGoodButtonClick = ()=>{
    const newValue = good + 1
    setGood(newValue)
    setTotoal(newValue + neutral + bad)
  }

  const handleNeutralButtonClick = ()=>{
    const newValue = neutral + 1
    setNeutral(newValue)
    setTotoal(good + newValue + bad)
  }

  const handleBadButtonClick = ()=>{
    const newValue = bad + 1
    setBad(newValue)
    setTotoal(good + neutral + newValue)
  }

  return (
    <div>
      <h3>Give feedback</h3>
      <Button onClick={handleGoodButtonClick} text="Good" />
      <Button onClick={handleNeutralButtonClick} text="neutral" />
      <Button onClick={handleBadButtonClick} text="Bad" />
      <h3>Statistics</h3>
      <p>Good {good}</p>
      <p>neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {total}</p>
      <p>Average {(good-bad)/total}</p>
      <p>Positive {(good/total)*100}</p>

    </div>
 )
}

export default App
