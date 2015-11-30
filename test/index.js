import React from 'react';
import {expect} from 'chai';
import BackgroundVideo from 'react-background-video';

describe('BackgroundVideo', function() {
  let component = null;

  beforeEach(function() {
    const container = document.createElement('container');
    container.id = 'content';
    document.body.appendChild(container);

    component = React.createElement(BackgroundVideo);
  });

  it('should create a new instance of BackgroundVideo', function() {
    expect(component).to.be.ok;
  });
});
