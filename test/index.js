import React from 'react';
import { expect } from 'chai';
import BackgroundVideo from 'react-background-video';

import { render, mount } from 'enzyme';

describe('<BackgroundVideo />', () => {
  it('is instantiable', () => {
    const wrapper = render(<BackgroundVideo />);
    expect(wrapper).to.not.equal(null);
    expect(() => {
      /* eslint new-cap:0 */
      BackgroundVideo();
    }).to.throw(TypeError);
  });

  it('passes in videos', () => {
    const videos = [{
      src: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
      type: 'mp4',
    }];

    const wrapper = render(<BackgroundVideo videos={videos} />);
    expect(wrapper).to.not.equal(null);
  });

  it('calls `componentWillUnmount` when unmounting', () => {
    sinon.spy(BackgroundVideo.prototype, 'componentWillUnmount');

    const videos = [{
      src: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
      type: 'mp4',
    }];

    const wrapper = mount(<BackgroundVideo videos={videos} />);
    expect(BackgroundVideo.prototype.componentWillUnmount.calledOnce).to.equal(false);
    wrapper.unmount();
    expect(BackgroundVideo.prototype.componentWillUnmount.calledOnce).to.equal(true);
  });
});
