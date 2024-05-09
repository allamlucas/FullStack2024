   const Persons = ({persons,searchValue,delId}) => {
    return(
        persons
            .filter((valor) => (valor.name.toLowerCase().includes(searchValue.toLowerCase())))
            .map((person) => <li key={person.name}>{person.name} {person.number}
            <button onClick={()=>delId(person.id, person.name)}type="submit"> Delete</button></li>)
    )
}

export {Persons}