const Persons = ({persons,searchValue}) => {
    return(
        persons
            .filter((valor) => (valor.name.toLowerCase().includes(searchValue.toLowerCase())))
            .map((person) => <li key={person.name}>{person.name} {person.number}</li>)
    
    )
}

export {Persons}