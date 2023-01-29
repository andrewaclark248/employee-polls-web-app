import { render, screen, fireEvent } from '@testing-library/react';
import App from './components/App.js';
import { Provider } from 'react-redux';
import store from './redux/reducers/store.js';

describe('Test App.js', () => {
  
  test('renders learn react link', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    let loginHeader = screen.getByText("Login Page");
    expect(loginHeader).toBeInTheDocument();
  }); /***/

  test('renders learn react link', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    fireEvent.click(screen.getByText("Login Now"))


    let homePageHeader = screen.getByText("Home Page");
    expect(homePageHeader).toBeInTheDocument();
  });

})
/**
 */