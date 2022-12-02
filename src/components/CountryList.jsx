import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { AiOutlineArrowRight } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { fetchCountries } from '../redux/countries/countries';
import colorSequency from '../script';
import '../sass/Countries.scss';

const CountryList = ({ search }) => {
  const { countriesList } = useSelector((state) => state.countrySlice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!countriesList.length) {
      dispatch(fetchCountries());
    }
  }, [countriesList, dispatch]);

  const filteredCountries = countriesList
    .filter((country) => country.name.common.toLowerCase().includes(search));
  const sequence = colorSequency(countriesList.length);
  return (
    <div className="card-container">
      {filteredCountries.map((country, index) => (
        <NavLink
          to={`/details/${country.name.common}`}
          state={country.name.common}
          key={Math.random()}
          className={`${sequence.includes(index + 1) ? 'cardA' : 'cardB'}`}
        >
          <div
            className="card_Country "
            key={Math.random()}
          >
            <Card.Img variant="top" src={country.flags.png} alt="Flag" />

            <button
              type="button"
              className="arrow-btn"
            >
              <AiOutlineArrowRight className="arrow-svg" />
            </button>

            <h2>{country.name.common}</h2>
            <div className="card_Population">
              <h3>
                Population
                <span className="card-pop">{country.population}</span>
              </h3>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};
CountryList.propTypes = {
  search: PropTypes.string,
};
CountryList.defaultProps = {
  search: null,
};

export default CountryList;
