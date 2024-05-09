
const Course = (props) =>{
  
  let suma
    return(
    <div>
    <h1>
        {props.course.name}
    </h1>
    {props.course.parts.map (parte =>
  <li key={parte.id}>
   { console.log(parte.id)}
    {parte.name} {parte.exercises}
  </li>
    )}

     {/* {props.course.parts.map (ejercicio => {
      suma = suma+ejercicio.exercises
    }) } <p><b>Total of {suma} excercises</b></p> */}

  <p><b> Total of { suma = props.course.parts.reduce((s, p) => s + p.exercises,0,)} Excercises</b></p>
   
      </div>
    )
}

export default Course