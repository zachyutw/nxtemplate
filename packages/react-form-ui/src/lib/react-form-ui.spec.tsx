import { render } from '@testing-library/react';

import ReactFormUi from './react-form-ui';

describe('ReactFormUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactFormUi />);
    expect(baseElement).toBeTruthy();
  });
});
