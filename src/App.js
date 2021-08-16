import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';
import { ContactForm } from './components/ContactForm';
import { v4 as uuidv4 } from 'uuid';
import { ContactList } from './components/ContactList';
import { Filter } from './components/Filter';

class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  addContact = (name, number) => {
    const { contacts } = this.state;
    if (contacts.find(contact => contact.name === name)) {
      alert(name + ' is already in contacts');
      return;
    }
    const contact = { id: uuidv4(), name: name, number: number };
    this.setState(({ contacts }) => ({contacts: [...contacts, contact]}));
  }

  changeFilter = (evt) => {
    this.setState({ filter: evt.target.value });
  }

  getFilteredArray = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.toUpperCase().includes(filter.toUpperCase()),0);
  }

  deleteContact = (evt) => {
    const nameForDelete = evt.target.name;
    const { contacts } = this.state;
    this.setState((prevState) => (
      { contacts: prevState.contacts.filter(contact => contact.name !== nameForDelete) }
    ));
  }

  render() {
    const { contacts, name, filter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Phonebook</h1>
          <ContactForm onClick={this.addContact} />
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter}/>
          <ContactList contacts={this.getFilteredArray()} onDelete={this.deleteContact} />
        </header>
      </div>
    );
  }
}

export default App;
