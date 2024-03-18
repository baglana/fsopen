import { useEffect, useState } from 'react'
import Notification from './components/Notification'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [infoMessage, setInfoMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault();

   const personObj = {
      name: newName,
      number: newNumber
    }

    const alreadyAdded = persons.find(p => p.name === newName)
    if (alreadyAdded) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personService
          .update(alreadyAdded.id, personObj)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id !== returnedPerson.id ? p : returnedPerson))
            setInfoMessage(`Updated ${newName}`)
          })
          .catch(error => {
            setErrorMessage(`Information of ${newName} has already been removed from server`)
            setPersons(persons.filter(p => p.name !== newName))

            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })
      } else return
    } else {
      personService
        .create(personObj)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setInfoMessage(`Added ${newName}`)
        })
    }
    
    setTimeout(() => {
      setInfoMessage(null)
    }, 5000)
    setNewName('')
    setNewNumber('')
  }

  const deletePerson = (id) => {
    if (window.confirm(`Delete ${persons.find(p => p.id === id).name} ?`)) {
      personService
        .delete_(id)
        .then(returnedPerson => {
          setPersons(persons.filter(p => p.id !== id))
        })
        .catch(console.log)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={infoMessage} />
      <Notification message={errorMessage} isError='true' />

      <Filter
        filter={filter}
        onChange={(e) => { setFilter(e.target.value) }}
      />

      <h3>add a new</h3>

      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />

      <h3>Numbers</h3>

      <Persons
        persons={persons}
        filter={filter}
        deletePerson={deletePerson}
      />
    </div>
  )
}

export default App