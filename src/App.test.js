import { render, screen, fireEvent } from '@testing-library/react';
import App from './components/App.js';
import { Provider } from 'react-redux';
import store from './redux/reducers/store.js';
import Login from './components/Login.js'
import renderer from 'react-test-renderer';


describe('Test App.js', () => {
  /***/
  test('test existence of login header', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    let loginHeader = screen.getByText("Login Page");
    expect(loginHeader).toBeInTheDocument();
  }); 

  test('Login and navigate to home page', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    fireEvent.click(screen.getByText("Login Now"))
    let homePageHeader = screen.getByText("Home Page");

    expect(homePageHeader).toBeInTheDocument();
  });



  it('add snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(tree).toMatchSnapshot();
  });
  /******/

})
/**
 */