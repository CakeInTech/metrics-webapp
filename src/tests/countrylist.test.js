import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import CountryList from '../components/CountryList';
import store from '../redux/configureStore';

describe('List of all fetched countries', () => {
  it('should render countries that are fetched from api', async () => {
    render(
      <Provider store={store}>
        <CountryList />
      </Provider>,
    );
  });
});
