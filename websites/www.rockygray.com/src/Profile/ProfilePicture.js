import React from 'react';

import './ProfilePicture.css';

const ProfilePicture = ({ imageWidth, image, xCenter, yCenter, circleDiameter }) => {
  const squareLength = 75;

  const circle = {
    radius: circleDiameter / 2,
    xCenter,
    yCenter,
  };

  const topRectangle = {
    xStart: xCenter - squareLength,
    yStart: yCenter - squareLength,
  };
  const bottomRectangle = {
    xStart: xCenter,
    yStart: yCenter,
  };

  return (
    <>
      <svg width={imageWidth} height="200">
        <defs>
          <clipPath id="profileClipPath">
            <rect
              x={topRectangle.xStart}
              y={topRectangle.yStart}
              width={squareLength}
              height={squareLength}
            />
            <circle cx={circle.xCenter} cy={circle.yCenter} r={circle.radius} />
            <rect
              x={bottomRectangle.xStart}
              y={bottomRectangle.yStart}
              width={squareLength}
              height={squareLength}
            />
          </clipPath>
          <filter id="dilateShape">
            <feMorphology operator="dilate" in="SourceGraphic" radius="2" />
          </filter>
        </defs>
        <g transform="translate(5,5)">
          <g class="profile-dilate">
            <rect class="profile-clip" x="0" y="0" height="400px" width={imageWidth} ></rect>
          </g>
          <image class="profile-clip" href={image} height="200" width={imageWidth} />
        </g>
      </svg>
    </>);
};

export default ProfilePicture;
