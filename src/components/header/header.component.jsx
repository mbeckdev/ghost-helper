import React from 'react';
import './header.styles.scss';

import COLORS from '../colors';

function Header() {
  console.log(COLORS);
  return (
    <header
      className="header"
      style={{
        color: `${COLORS.lightest}`,
        backgroundColor: `${COLORS.darkest}`,
      }}
    >
      <div className="header-title">Ghost Helper 9000</div>
      <div style={{ color: `${COLORS.dark}` }}>MMade with React</div>
    </header>
  );
}

export default Header;
