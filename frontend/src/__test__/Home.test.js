/**
 * @jest-environment jsdom
 */

/** @type {import('jest').Config} */
const config = {
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: -10,
      },
    },
  };
  
  module.exports = config;

  import React from 'react';
import { render } from '@testing-library/react';
import Home from '../component/Home/Home.jsx';

describe('Home component', () => {
  it('Renders Home component without crashing', () => {
    render(<Home />);
    // If the component renders without any errors, the test passes
  });
});
