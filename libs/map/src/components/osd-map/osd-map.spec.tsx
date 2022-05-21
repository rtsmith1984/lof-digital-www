import { render } from '@testing-library/react';

import OsdMap from './osd-map';

describe('OsdMap', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OsdMap />);
    expect(baseElement).toBeTruthy();
  });
});
