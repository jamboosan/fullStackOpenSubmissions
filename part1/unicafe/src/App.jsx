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

  const handleGoodButtonClick = ()=>{
    setGood(good +1)
  }

  const handleNeutralButtonClick = ()=>{
    setNeutral( neutral +1)
  }

  const handleBadButtonClick = ()=>{
    setBad(bad +1)
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

    </div>
 )
}

export default App
