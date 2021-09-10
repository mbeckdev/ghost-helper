import React from 'react';

import GhostHelperGrid from '../ghost-helper-grid/ghost-helper-grid.component';
import COLORS from '../colors';

import './ghost-helper.syles.scss';

const GhostHelper = () => (
  <div
    className="ghost-helper"
    style={{
      backgroundColor: `${COLORS.darkest}`,
      color: `${COLORS.lightest}`,
    }}
  >
    <h2>Ghost Helperrrr</h2>
    <GhostHelperGrid />
  </div>
);

export default GhostHelper;
