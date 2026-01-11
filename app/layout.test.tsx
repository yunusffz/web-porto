import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import RootLayout from './layout';

describe('RootLayout', () => {
  it('renders children correctly', () => {
    render(
      <RootLayout>
        <div data-testid="test-child">Test Content</div>
      </RootLayout>,
    );

    const child = screen.getByTestId('test-child');
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent('Test Content');
  });

  it('renders multiple children', () => {
    render(
      <RootLayout>
        <div data-testid="child-1">First Child</div>
        <div data-testid="child-2">Second Child</div>
      </RootLayout>,
    );

    expect(screen.getByTestId('child-1')).toHaveTextContent('First Child');
    expect(screen.getByTestId('child-2')).toHaveTextContent('Second Child');
  });

  it('renders complex nested children', () => {
    render(
      <RootLayout>
        <main>
          <header data-testid="header">Header</header>
          <article data-testid="article">Article Content</article>
        </main>
      </RootLayout>,
    );

    expect(screen.getByTestId('header')).toHaveTextContent('Header');
    expect(screen.getByTestId('article')).toHaveTextContent('Article Content');
  });

  it('matches snapshot', () => {
    const { container } = render(
      <RootLayout>
        <div>Snapshot test</div>
      </RootLayout>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
