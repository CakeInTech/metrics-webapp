import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Navbars from '../components/Navbar';

describe('Rendering the navbar', () => {
  test('if the navbar renders correctly', () => {
    const nav = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Navbars />
        </BrowserRouter>
      </Provider>,
    );
    expect(nav).toMatchSnapshot();
  });
});
