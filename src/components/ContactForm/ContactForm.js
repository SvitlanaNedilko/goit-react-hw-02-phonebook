import React from 'react'
import shortid from 'shortid'
import PropTypes from 'prop-types'

import './ContactForm.scss'

class ContactForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  }

  state = {
    name: '',
    number: '',
  }

  nameInputId = shortid.generate()
  numberInputId = shortid.generate()

  handleInputChange = (event) => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.setState({ number: '', name: '' })
  }

  render() {
    return (
      <form className="ContactForm" onSubmit={this.handleSubmit}>
        <label className="ContactForm_Input" htmlFor={this.nameInputId}>
          Имя
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleInputChange}
            id={this.nameInputId}
          />
        </label>
        <label className="ContactForm_Input" htmlFor={this.numberInputId}>
          Телефон
          <input
            type="text"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.handleInputChange}
            id={this.numberInputId}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    )
  }
}

export default ContactForm
