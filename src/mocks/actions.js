export const fetchAllCountries = (id) => ({
  type: 'FETCH_ALL_COUNTRIES',
  id,
});

export const fetchDetails = (id) => ({
  type: 'FETCH_DETAILS',
  id,
});
