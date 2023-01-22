import { render } from '@testing-library/react';

import Testlib1 from './testlib1';

describe('Testlib1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Testlib1 />);
    expect(baseElement).toBeTruthy();
  });
});
