import { render, screen } from '@testing-library/react'
import { describe, expect } from 'vitest'
import App from './App'

describe('App component', () => {
  it('should render correctly', () => {
    render(<App />)
    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
  })
})
