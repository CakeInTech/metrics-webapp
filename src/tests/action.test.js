import { fetchAllCountries, fetchDetails } from '../mocks/actions';

describe('FETCH_ALL_COUNTRIES', () => {
  it('should have a type of FETCH_ALL_COUNTRIES', () => {
    const id = 1;
    const expectedType = {
      type: 'FETCH_ALL_COUNTRIES',
      id: 1,
    };

    const result = fetchAllCountries(id);

    expect(result).toEqual(expectedType);
  });
});

describe('actions', () => {
  it('should have a type of FETCH_DETAILS', () => {
    const id = 1;
    const expectedType = {
      type: 'FETCH_DETAILS',
      id: 1,
    };

    const result = fetchDetails(id);

    expect(result).toEqual(expectedType);
  });
});
