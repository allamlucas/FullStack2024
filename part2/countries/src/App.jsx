import { useEffect, useState } from 'react'
import services from './services/countries.js'
import {CountryForm} from './components/CountryForm.jsx'
import {List} from './components/List.jsx'
function App() {

  
  const [countries, setCountry] = useState([])
  const [newName, setNewName] = useState([])

  useEffect(() => {
    services
    .getAll()
    .then(res => setCountry(res.data))
   }, [])

   const handleInput = (event) => {
    if (event.target.value){
    const inputValue = event.target.value;
    const filteredCountries = countries.filter((country) => 
    country.name.common.toLowerCase().includes(inputValue)
    )
    const countryNames = filteredCountries.map((country) => country);
    setNewName(countryNames)
  }
    else{
      setNewName([])
   
    }
  }

  return (
<div>
     <CountryForm handleInput={handleInput}  />
     <List newName={newName} />
</div>

  )
}

export default App
