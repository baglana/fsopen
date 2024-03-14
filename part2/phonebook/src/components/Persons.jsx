import Person from './Person'

const Persons = ({ persons, filter }) => (
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
        />
      )}
  </>
)

export default Persons