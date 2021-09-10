import React from 'react';

import './row-header-cell.styles.scss';

const RowHeaderCell = (props) => (
  <div className="row-header-cell">
    <div className="title">{props.title}</div>
  </div>
);

export default RowHeaderCell;
