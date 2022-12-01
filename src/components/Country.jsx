import React, { useState } from 'react';
import * as ReactBoots from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CountryList from './CountryList';
import worldmap from '../assets/worldmap.png';
import '../sass/Countries.scss';

// eslint-disable-next-line react/prop-types
const Countries = ({ population }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    const param = e.target.value.trim();
    setSearch(param);
  };

  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          onChange={handleSearch}
          placeholder="search country"
          value={search}
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <ReactBoots.Card className="world-card">
        <ReactBoots.Card.Img className="world-img" src={worldmap} />
        <ReactBoots.Card.Body className="world-body">
          <h2>World</h2>
          <p>
            <strong>population</strong>
            {' '}
            <br />
            {' '}
            {population}
          </p>
        </ReactBoots.Card.Body>
      </ReactBoots.Card>
      <p className="samble-line">population by country</p>
      <CountryList search={search.toLowerCase()} />
    </>
  );
};

Countries.defaultProps = {
  population: 8002840270,
};

export default Countries;
