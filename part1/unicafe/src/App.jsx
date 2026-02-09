import { useState } from 'react'


const Button = ({onClick, text})=>{
  return(
    <button onClick={onClick}>{text}</button>
  )
}


const StatisticLine = ({text, value})=>{
  return(
    <p> {text} {value}</p>
  )
}

const Statistics = ({good, neutral, bad, total}) =>{
  if(!total){
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return(
<div>
      <StatisticLine text="Good" value={good}/>
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="All" value={total}/>
      <StatisticLine text ="Avreage" value={(good-bad)/total}/>
      <StatisticLine text="Positive" value={(good/total)*100} />
</div>
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
      <Statistics good={good} neutral ={neutral} bad={bad} total = {total}/>

    </div>
 )
}

export default App
