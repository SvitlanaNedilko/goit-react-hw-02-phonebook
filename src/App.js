import React from 'react'
import shortid from 'shortid'

import ContactList from './components/ContactList/ContactList'
import initialContacts from './initialContacts.json'
import Filter from './components/Filter/Filter'
import ContactForm from './components/ContactForm/ContactForm'

import './App.scss'

class App extends React.Component {
  state = {
    contacts: initialContacts,
    filter: '',
  }

  formsSubmitHandler = ({ name, number }) => {
    const isPresentName = this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    )
    if (isPresentName) {
      alert(`${name} is already in contacts`)
    } else {
      const contact = {
        id: shortid.generate(),
        name,
        number,
      }

      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }))
    }
  }

  onDeleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }))
  }

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value })
  }

  render() {
    const normalizedFilter = this.state.filter.toLowerCase()

    const visibleContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    )
    const { filter } = this.state

    return (
      <div className="AppRoot">
        <h1 className="AppTitle">Phonebook</h1>
        <ContactForm onSubmit={this.formsSubmitHandler} />

        <h2 className="AppTitle">Contacts</h2>
        <Filter filter={filter} changeFilter={this.changeFilter} />

        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    )
  }
}
export default App
