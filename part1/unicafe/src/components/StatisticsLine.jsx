const StatisticsLine = ({value,text,por}) =>{
    return(
        <tr>
          <td>{text}: {value}{por}</td>
        </tr>
    )
}

export default StatisticsLine