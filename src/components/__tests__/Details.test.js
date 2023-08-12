import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Details from '../Details';

const mockCountry = {
  name: {
    official: 'Country Name',
  },
  flags: {
    png: 'flag.png',
  },
};

describe('Details component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Details country={mockCountry} />
      </BrowserRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
