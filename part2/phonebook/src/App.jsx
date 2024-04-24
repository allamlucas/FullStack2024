import { useState } from 'react'
import Filter from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [newNumber, setnewNumber] = useState('')

  const handleInput = (event) => {
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setnewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setSearchValue(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }


    if (persons.some((persona) => newName.toLowerCase() === persona.name.toLowerCase())) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />
      <h2>ADD A NEW</h2>
      <PersonForm addPerson={addPerson} handleInput={handleInput} handleNumber={handleNumber} />
      <h2>Numbers</h2>
      <Persons persons={persons} searchValue={searchValue}/>

    </div>
  )
}
export default App

