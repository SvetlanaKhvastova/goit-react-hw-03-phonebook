import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import s from './Contacts.module.css';

const Contacts = ({ filterSearch, deleteContact }) => {
  return (
    <ul className={s.contactsBlock}>
      {filterSearch.map(({ name, number, id }) => {
        return (
          <li key={id} className={s.flex}>
            <p>
              <span>{name}: </span>
              <span className={s.number}>{number}</span>
            </p>

            <Button
              name="Delete"
              type="button"
              onClick={() => deleteContact(id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

Contacts.protoTypes = {
  filterSearch: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};

export default Contacts;
