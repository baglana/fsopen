const Person = ({ name, number, deletePerson }) => (
  <div>
    {name} {number} <button onClick={deletePerson}>delete</button><br />
  </div>
)

export default Person