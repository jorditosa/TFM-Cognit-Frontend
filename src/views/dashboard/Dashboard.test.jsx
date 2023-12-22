import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
  test('Deberia renderizarse con el Logo', () => {
    render(<Dashboard />);
    expect('Dashboard').toBeTruthy();
  });
})