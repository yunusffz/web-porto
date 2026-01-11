import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from './page';

describe('Page', () => {
  it('renders the main heading', () => {
    render(<Page />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Hello, Next.js!');
  });

  it('displays the correct welcome message', () => {
    render(<Page />);

    expect(screen.getByText('Hello, Next.js!')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });
});
