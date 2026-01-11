import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import RootLayout from './layout';

describe('RootLayout', () => {
  it('renders children correctly', () => {
    const { container } = render(
      <RootLayout>
        <div data-testid="test-child">Test Content</div>
      </RootLayout>,
    );

    const child = container.querySelector('[data-testid="test-child"]');
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent('Test Content');
  });

  it('renders html structure with correct lang attribute', () => {
    const { container } = render(
      <RootLayout>
        <div>Content</div>
      </RootLayout>,
    );

    const html = container.querySelector('html');
    expect(html).toHaveAttribute('lang', 'en');
  });

  it('wraps children in body tag', () => {
    const { container } = render(
      <RootLayout>
        <main>Main Content</main>
      </RootLayout>,
    );

    const body = container.querySelector('body');
    const main = container.querySelector('main');

    expect(body).toBeInTheDocument();
    expect(main?.parentElement).toBe(body);
  });

  it('matches snapshot', () => {
    const { container } = render(
      <RootLayout>
        <div>Snapshot test</div>
      </RootLayout>,
    );

    expect(container).toMatchSnapshot();
  });
});
