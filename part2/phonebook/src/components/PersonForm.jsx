const PersonForm = ({
    addPerson,
    handleInput,
    handleNumber
}) =>{
    return (
        <form onSubmit={addPerson}>
        <div>
       Name: <input onChange={handleInput} />
        </div>
        <div>
        Telephone: <input onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">ADD</button>
        </div>
      </form>
    )
}
export {PersonForm}