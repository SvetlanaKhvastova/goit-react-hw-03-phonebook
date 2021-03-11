import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import s from './ContactForm.module.css';
import Button from '../Button/Button';
import Label from './Label/Label';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    // console.log(e);
    // console.log(e.currentTarget);
    const { name, value } = e.currentTarget;
    return this.setState({ [name]: value });
  };

  handleSubmiteForm = e => {
    e.preventDefault();

    const { name, number } = this.state;

    const Id = uuidv4();

    const newContact = { Id, name, number };
    // console.log(newContacts);

    this.props.onSubmit(newContact);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { handleSubmiteForm, handleInputChange } = this;
    const { name, number } = this.state;

    return (
      <div className={s.block}>
        <form className={s.form} onSubmit={handleSubmiteForm}>
          <Label
            type="text"
            name="name"
            value={name}
            pattern="[A-Za-z]{1,}\s[A-Za-z]{1,}"
            placeholder="Svetlana Khvastova"
            inputChange={handleInputChange}
          />
          <Label
            type="tel"
            name="number"
            value={number}
            pattern="[+][0-9]{2}[0-9]{10}"
            placeholder="+380994183047"
            inputChange={handleInputChange}
          />
          <Button name="Add contact" type="submit" />
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  handleInputChange: PropTypes.func,
};

export default ContactForm;
