import React, { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchDetails } from '../redux/countries/details';
import '../sass/Details.scss';

const CountryDetails = () => {
  const { countryDetails } = useSelector((state) => state.detailslice);
  const dispatch = useDispatch();
  const { state } = useLocation();

  useEffect(() => {
    dispatch(fetchDetails(state));
  }, []);

  return (
    <div className="countryDetails">
      {countryDetails.map((country) => (
        <div className="cardDetails" key={country.id}>
          <div className="detailsTop">
            <h2>{country.name.common}</h2>
            <img className="detailFlag" src={country.flags.svg} alt="Flag" />
          </div>
          <ListGroup className="items">
            <ListGroup.Item className="detailItem">
              Capital City:
              {country.capital}
            </ListGroup.Item>
            <ListGroup.Item className="detailItem">
              Area:
              {` ${country.area}km`}
            </ListGroup.Item>
            <ListGroup.Item className="detailItem">
              Population:
              {` ${country.population}`}
            </ListGroup.Item>
            <ListGroup.Item className="detailItem">
              independent:
              {` ${country.independent}`}
            </ListGroup.Item>
            <ListGroup.Item className="detailItem">
              Landlocked:
              {` ${country.landlocked}`}
            </ListGroup.Item>
          </ListGroup>
        </div>
      ))}
    </div>
  );
};

export default CountryDetails;
