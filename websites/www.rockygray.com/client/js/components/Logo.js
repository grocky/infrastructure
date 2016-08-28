import React, { PropTypes } from 'react';
import _map from 'lodash/map'
import _includes from 'lodash/includes';

import {inactiveLogo as inactiveLogoStyle } from '../../css/Card.css';

const LogoPath = ({fill, path}) => (
  <path fill={fill} d={path} />
);

const Logo = ({ segments, fillColor, highlightColor, createLogo, onMouseEnter, onClick, highlightedSections, containerClass }) => {

  // TODO: extract to SVGPathsGroup
  const logoPaths = _map(segments, segment => (
    <LogoPath key={segment.id}
              fill={_includes(highlightedSections, segment.id) ? highlightColor : segment.fill}
              path={segment.path}
    />
  ));

  return (
    <svg className={containerClass} fill={fillColor} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215 323"
         ref={createLogo}
         onMouseEnter={onMouseEnter}
         onClick={onClick}
    >
      {/* TODO make this a SVGPathsGroup*/}
      {/*< SVGPathsGroup />*/}
      <g>
        {logoPaths}
      </g>
    </svg>
  );
};

Logo.propTypes = {
  createLogo: PropTypes.func.isRequired,
  fillColor: PropTypes.string,
  highlightColor: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onClick: PropTypes.func,
  highlightedSections: PropTypes.array,
  containerClass: PropTypes.string,
  segments: PropTypes.arrayOf(PropTypes.shape({ // TODO: move to SVGPathsGroup container
    id: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    fill: PropTypes.string
  }).isRequired)
};

const noop = () => {};

Logo.defaultProps = {
  fillColor: '#FFFFFF',
  highlightColor: '#991D20',
  onMouseEnter: noop,
  onClick: noop,
  highlightedSections: [],
  containerClass: inactiveLogoStyle,
  segments: [
    {
      id: 'top',
      path: 'M0 216v1.8c.1 5 .6 9.9 1.3 14.7L39 206c0-28.7.1-100 .1-101.6 1.9-36.3 31.7-64.6 68.1-64.6 37.3 0 67.8 30.4 68 67.6v3l36.6-25.7C201.6 36.4 158.5.1 107.3.1 48.1.1 0 48.2 0 107.5V216z',
      fill: ''
    },
    {
      id: 'middle',
      path: 'M163.3 151.9v39.2H82.7l55.9-39.2h24.7z',
      fill: ''
    },
    {
      id: 'bottom',
      path: 'M175.9 151.9v63.6c0 37.7-30.5 68.2-68.1 68.2-35.7 0-65-27.7-67.9-62.6l-35 24.6C17.9 290.3 59 323 107.7 323c59.2 0 107.3-48.1 107.3-107.4V152l-39.1-.1z',
      fill: ''
    }
  ]
};

Logo.letterGroups = [
  {
    letter: 'r',
    sections: ['middle', 'bottom']
  },
  {
    letter: 'g',
    sections: []
  },
  {
    letter: 'j',
    sections: ['top']
  }
];

export default Logo;
