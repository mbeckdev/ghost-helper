import React from 'react';
import './homepage.styles.scss';

import Header from '../../components/header/header.component';
import InnerCell from '../../components/inner-cell/inner-cell.component';

const HomePage = () => (
  <div>
    <Header />
    <div>It's the homepage!</div>
    <p>asdf</p>
    <InnerCell></InnerCell>
  </div>
);

export default HomePage;
