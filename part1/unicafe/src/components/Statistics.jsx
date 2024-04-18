import StatisticsLine from "./StatisticsLine"

const Statistics = ({good,neutral,bad,total}) =>{
    if (!total){
        return (<h1>No feedback Given </h1>)
    }else{
    return (
        <div>
     <h1>Statistics</h1>
  <table>    
  <tbody>
  <StatisticsLine text="good" value={good} />
  <StatisticsLine text="neutral" value={neutral} />
  <StatisticsLine text="bad" value={bad} />
  <StatisticsLine text="All" value={total} />
  <StatisticsLine text="Average" value={(good-bad)/(total)} />
  <StatisticsLine text="Positive" value={good/(total)} por={"%"} />
  </tbody>
  </table>
  </div>
    )
}}

export default Statistics

