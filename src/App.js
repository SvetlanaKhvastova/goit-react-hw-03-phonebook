import { Component } from 'react';

import './App.css';

import ContactForm from './components/ContactForm/ContactForm';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '+380994591256' },
      { id: 'id-2', name: 'Hermione Kline', number: '+380994438912' },
      { id: 'id-3', name: 'Eden Clements', number: '+380996451779' },
      { id: 'id-4', name: 'Annie Copeland', number: '+380992279126' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const jsonContacts = JSON.parse(contacts);
    if (jsonContacts) {
      this.setState({ contacts: [...jsonContacts] });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  handleSubmit = e => {
    const { contacts } = this.state;

    const newName = e.name.toLowerCase();
    const newPhone = e.number;

    if (contacts.find(el => el.name.toLowerCase() === newName)) {
      return alert(`${newName} is already in contacts`);
    }

    if (contacts.find(el => el.number.toLowerCase() === newPhone)) {
      return alert(`${newPhone} is already in contacts`);
    }

    const newContact = contacts.concat(e);

    this.setState(prevState => {
      return { ...prevState, contacts: newContact };
    });
  };

  handlerFilterSearch = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  deleteContact = contactId => {
    // console.log(contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { handleSubmit, handlerFilterSearch, deleteContact } = this;
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const searchName = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={handleSubmit} />

        <h2>Contacts</h2>

        <Filter
          filterSearch={filter}
          handlerFilterSearch={handlerFilterSearch}
        />

        <Contacts filterSearch={searchName} deleteContact={deleteContact} />
      </div>
    );
  }
}

export default App;
