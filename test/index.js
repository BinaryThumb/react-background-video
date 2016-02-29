import React from 'react';
import { expect } from 'chai';
import BackgroundVideo from 'react-background-video';

import { render } from 'enzyme';

describe('<BackgroundVideo />', () => {
  it('is instantiable', () => {
    const wrapper = render(<BackgroundVideo />);
    expect(wrapper).to.not.equal(null);
  });
});
