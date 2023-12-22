import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
  test('Deberia renderizarse el componente', () => {
    render(<Dashboard />);
    expect('Dashboard').toBeTruthy();
  });
})