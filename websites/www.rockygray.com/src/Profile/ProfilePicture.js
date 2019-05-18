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
      <img class="profile-clip" width={imageWidth} src={image} alt="Headshot" />
      <svg width="0" height="0">
        <defs>
          <clipPath id="profileClip">
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
        </defs>
      </svg>
    </>);
};

export default ProfilePicture;
