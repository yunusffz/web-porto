import { describe, it, expect } from 'vitest';
import RootLayout from './layout';

describe('RootLayout', () => {
  it('returns the correct JSX structure with children', () => {
    const testChildren = <div data-testid="test-child">Test Content</div>;
    const result = RootLayout({ children: testChildren });

    expect(result).toBeDefined();
    expect(result.type).toBe('html');
    expect(result.props.lang).toBe('en');
  });

  it('passes children to the body element', () => {
    const testChildren = <main>Main Content</main>;
    const result = RootLayout({ children: testChildren });

    // Access the body element (first child of html)
    const bodyElement = result.props.children;
    expect(bodyElement.type).toBe('body');
    expect(bodyElement.props.children).toBe(testChildren);
  });

  it('accepts React nodes as children', () => {
    const complexChildren = (
      <>
        <header>Header</header>
        <main>Content</main>
        <footer>Footer</footer>
      </>
    );

    const result = RootLayout({ children: complexChildren });
    const bodyElement = result.props.children;

    expect(bodyElement.props.children).toBe(complexChildren);
  });
});
