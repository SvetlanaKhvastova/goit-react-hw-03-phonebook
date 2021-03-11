import React from 'react';
import s from './Filter.module.css';
import ProtoTypes from 'prop-types';

const Filter = ({ filterSearch, handlerFilterSearch }) => {
  return (
    <div className={s.filterBox}>
      <h3 className={s.filterTitle}>Find contact by name</h3>
      <input
        className={s.filterInput}
        type="text"
        name="filter"
        value={filterSearch}
        onChange={handlerFilterSearch}
      />
    </div>
  );
};

Filter.protoTypes = {
  filterSearch: ProtoTypes.string.isRequired,
  handlerFilterSearch: ProtoTypes.func.isRequired,
};

export default Filter;
