import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  fill: ${props => props.theme.colors.branding.tertiary};
  :hover {
    fill: ${props => props.theme.colors.branding.primary};
  }
`;

const AccountIcon = () => {
  return (
    <div className="App">
      <Svg viewBox="0 0 100 100">
        <g>
          <title>background</title>
          <rect
            fill="none"
            id="canvas_background"
            height="102"
            width="102"
            y="-1"
            x="-1"
          />
          <g
            display="none"
            overflow="visible"
            y="0"
            x="0"
            height="100%"
            width="100%"
            id="canvasGrid"
          >
            <rect
              fill="url(#gridpattern)"
              stroke-width="0"
              y="0"
              x="0"
              height="100%"
              width="100%"
            />
          </g>
        </g>
        <g>
          <title>Layer 1</title>
          <ellipse
            ry="12"
            rx="12"
            id="svg_1"
            cy="40"
            cx="50"
            stroke-width="0"
            stroke="#000"
          />
          <path
            id="svg_2"
            d="m29.21746,65.91535c0,0 2.91667,-12.91666 21.24999,-12.91666c18.33333,0 20.41666,12.91666 20.31247,12.71873c0.10419,0.19794 -41.56246,0.19794 -41.56246,0.19794z"
            stroke-opacity="null"
            stroke-width="0"
            stroke="#000"
          />
        </g>
      </Svg>
    </div>
  );
};

export default AccountIcon;
