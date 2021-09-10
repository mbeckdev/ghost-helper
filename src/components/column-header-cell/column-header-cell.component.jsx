import React from 'react';

import './column-header-cell.styles.scss';

const ColumnHeaderCell = (props) => (
  <div className="column-header-cell">
    <div className="title">{props.title}</div>
  </div>
);

export default ColumnHeaderCell;
