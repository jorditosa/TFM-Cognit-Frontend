import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from './App';

describe('App', () => {
  test('Deberia renderizarse con el Logo', () => {
    render(<App />);
    const logo = document.querySelector('img');
    expect(logo.getAttribute('src')).toBe('/assets/logo-no-background.svg');
  });
})