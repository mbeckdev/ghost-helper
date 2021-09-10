import React from 'react';
import ColumnHeaderCell from '../column-header-cell/column-header-cell.component';
import InnerCell from '../inner-cell/inner-cell.component';
import RowHeaderCell from '../row-header-cell/row-header-cell.component';

import './ghost-helper-grid.styles.scss';

const GhostHelperGrid = () => (
  <div className="ghost-helper-grid">
    <div></div>
    <ColumnHeaderCell title="Banshee" />
    <ColumnHeaderCell title="Demon" />
    <ColumnHeaderCell title="Goryo" />

    <RowHeaderCell title="EMFF"></RowHeaderCell>
    <InnerCell>hiaaa</InnerCell>
    <InnerCell>hiaaa</InnerCell>
    <InnerCell>hiaaa</InnerCell>

    <RowHeaderCell title="Fingerprints"></RowHeaderCell>
    <InnerCell />
    <InnerCell />
    <InnerCell />

    <RowHeaderCell title="Freezing Temperatures"></RowHeaderCell>
    <InnerCell />
    <InnerCell />
    <InnerCell />
  </div>
);

export default GhostHelperGrid;
