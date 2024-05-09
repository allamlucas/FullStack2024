import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'

import services from './services/persons.js'


const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [newNumber, setnewNumber] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  useEffect(() => {
   services
   .getAll()
   .then(res => setPersons(res.data))
  }, [])

  const handleInput = (event) => {
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setnewNumber(event.target.value)
  }


  const handleFilter = (event) => {
    setSearchValue(event.target.value)
  }

  const NotificationError = ({ message }) => {
    if (message === null) {
      return null
    }
    return (
      <div className="error">
        {message}
      </div>
    )
  }

  const NotificationSucess = ({ message }) => {
    if (message === null) {
      return null
    }
    return (
      <div className="success">
        {message}
      </div>
    )
  }

const addPerson = (event) => {
  event.preventDefault()
  const personObject = {
    name: newName,
    number: newNumber
  }
  if (persons.some((el) => el.name.toLowerCase() === newName.toLowerCase())) {
    if (confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
      const findPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
      const changedNumber = { ...findPerson, number: newNumber }
      services
        .update(findPerson.id, changedNumber)
        .then(() => {
        setPersons(persons.map(person => person.id !== findPerson.id ? person : changedNumber))
        setSuccessMessage(`${newName} asdasdasd`)
        setTimeout(() => {
        setSuccessMessage(null)
        }, 3000)
      })
          .catch(err => {
          setErrorMessage(`Information of ${newName} has already been removed from server`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })


      setNewName('')
      setnewNumber('')
    }
  } else {
    services
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
      })
    setNewName('')
    setnewNumber('')
    setSuccessMessage(`${newName} Added`)
    setTimeout(() => {
      setSuccessMessage(null)
        }, 3000)
  }
}

  const delId = (id, name) => {
    if (confirm(`Delete ${name}?`)) {
      services
        .del(id)
        .then(() => {
        console.log(`${id} succes`);
        })
      setPersons(persons.filter((person) => person.id !== id))
    }
  }

  return (
    <div>
      <NotificationError message={errorMessage} />
      <NotificationSucess message={successMessage} /> 
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />
      <h2>ADD A NEW</h2>
      <PersonForm addPerson={addPerson} handleInput={handleInput} handleNumber={handleNumber} newNumber={newNumber} newName={newName} />
      <h2>Numbers</h2>
      <Persons persons={persons} searchValue={searchValue} delId={delId} />
    </div>
  )
}
export default App

