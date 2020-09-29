import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {Main} from './pages';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('asdfasfasfsdfasdfsdf', () => {
  const { getByText } = render(<Main />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
