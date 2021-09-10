import React from 'react';
import './homepage.styles.scss';

import Header from '../../components/header/header.component';
// import InnerCell from '../../components/inner-cell/inner-cell.component';
import GhostHelper from '../../components/ghost-helper/ghost-helper.component';

const HomePage = () => (
  <div className="homepage">
    <Header />
    <GhostHelper />
    {/* <InnerCell></InnerCell> */}
  </div>
);

export default HomePage;
