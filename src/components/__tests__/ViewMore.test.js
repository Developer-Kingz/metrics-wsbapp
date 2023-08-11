import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ViewMore from '../ViewMore';

const mockStore = configureMockStore([]);

const initialState = {
  data: {
    data: [
      {
        name: 'Test Country',
        flags: 'test-flag-url',
        officialName: 'Official Test Country',
        capital: 'Test Capital',
        continent: 'Test Continent',
        population: 'Test Population',
        area: 'Test Area',
        languages: { ukr: 'spain' },
        timezone: ['Test Timezone'],
      },
    ],
  },
};

describe('ViewMore Component', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);

    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ViewMore />
        </BrowserRouter>
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
