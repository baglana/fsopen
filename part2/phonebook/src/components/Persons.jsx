import Person from './Person'

const Persons = ({ persons, filter, deletePerson }) => (
  <>
    {persons
      .filter(p =>
        p.name.toLowerCase()
          .includes(filter.toLowerCase()))
      .map(p =>
        <Person
          key={p.name}
          name={p.name}
          number={p.number}
          deletePerson={() => deletePerson(p.id)}
        />
      )}
  </>
)

export default Persons