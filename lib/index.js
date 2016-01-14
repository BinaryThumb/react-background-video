'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BackgroundVideo = function (_Component) {
  _inherits(BackgroundVideo, _Component);

  function BackgroundVideo() {
    _classCallCheck(this, BackgroundVideo);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BackgroundVideo).apply(this, arguments));
  }

  _createClass(BackgroundVideo, [{
    key: 'render',
    value: function render() {
      var videos = this.props.videos.map(function (video, index) {
        return _react2.default.createElement('source', { key: index, src: video.src, type: video.type });
      });

      var videoProps = {
        preload: this.props.preload,
        loop: this.props.loop,
        autoPlay: this.props.autoPlay,
        poster: this.props.poster
      };

      var videoClassNames = (0, _classnames2.default)(_defineProperty({
        'video-container': true
      }, this.props.className, !!this.props.className));

      var videoOverlayClassNames = (0, _classnames2.default)(_defineProperty({
        'video-overlay': true
      }, this.props.overlayClassName, !!this.props.overlayClassName));

      var overlayElement = this.props.overlay ? _react2.default.createElement('div', { className: videoOverlayClassNames }) : null;

      return _react2.default.createElement(
        'div',
        { className: videoClassNames, onClick: this.props.onClick },
        _react2.default.createElement(
          'video',
          _extends({ id: this.props.videoId, className: 'video-background' }, videoProps),
          videos
        ),
        overlayElement,
        _react2.default.createElement(
          'div',
          { className: 'video-content' },
          this.props.children
        )
      );
    }
  }]);

  return BackgroundVideo;
}(_react.Component);

BackgroundVideo.propTypes = {
  videos: _react.PropTypes.array,
  children: _react.PropTypes.node,
  preload: _react.PropTypes.bool,
  loop: _react.PropTypes.bool,
  autoPlay: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  overlayClassName: _react.PropTypes.string,
  videoId: _react.PropTypes.string,
  overlay: _react.PropTypes.bool,
  poster: _react.PropTypes.string,
  onClick: _react.PropTypes.func
};
BackgroundVideo.defaultProps = {
  videos: [],
  preload: true,
  loop: false,
  autoPlay: true,
  className: '',
  overlayClassName: '',
  videoId: 'video',
  overlay: true
};
exports.default = BackgroundVideo;