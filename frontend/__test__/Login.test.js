import React from 'react';
import { render } from '@testing-library/react';
import Login from '../src/component/User/Login';

test('renders Login component without crashing', () => {
  render(<Login />);
});
