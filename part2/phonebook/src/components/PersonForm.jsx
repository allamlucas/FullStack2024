const PersonForm = ({
    addPerson,
    handleInput,
    handleNumber,
    newName,
    newNumber,
}) =>{
    return (
        <form onSubmit={addPerson}>
        <div>
       Name: <input onChange={handleInput} value={newName}/>
       
        </div>
        <div>
        Telephone: <input onChange={handleNumber} value={newNumber} />
        </div>
        <div>
          <button type="submit">ADD</button>
        </div>
      </form>
    )
}
export {PersonForm}