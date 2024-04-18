const Button = (props) =>{
    return(
        <button onClick={props.handleClick}>{props.nombre}</button>
    )
}

export default Button