import React from 'react'
import PropTypes from 'prop-types'

import './ContactList.scss'

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="ContactList">
      {contacts.map(({ id, name, number }) => (
        <li className="ContactList_Item" key={id}>
          <p className="ContactList_Name">{name}</p>
          <p>{number}</p>
          <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
}

export default ContactList
