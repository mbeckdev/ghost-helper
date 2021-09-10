import React from 'react';
import ColumnHeaderCell from '../column-header-cell/column-header-cell.component';
import InnerCell from '../inner-cell/inner-cell.component';
import RowHeaderCell from '../row-header-cell/row-header-cell.component';

import './ghost-helper-grid.styles.scss';

import GAME_DATA from '../../game-data/game-data';

const numberOfGhosts = GAME_DATA.ghosts.length;
const columnHeaders = [];
for (let i = 0; i < numberOfGhosts; i++) {
  columnHeaders.push(
    <ColumnHeaderCell
      title={GAME_DATA.ghosts[i].name}
      key={GAME_DATA.ghosts[i].name}
    />
  );
}

console.log(GAME_DATA.ghosts.length);

let aKeyNumber = 0;

const evidenceRows = [];
for (let i = 0; i < GAME_DATA.evidence.length; i++) {
  evidenceRows.push(
    <RowHeaderCell title={GAME_DATA.evidence[i]} key={GAME_DATA.evidence[i]} />
  );

  // if (1 == 1) {
  evidenceRows.push(<InnerCell key={aKeyNumber} />);
  // } else {
  //   evidenceRows.push(<div key={aKeyNumber}>not</div>);
  // }

  aKeyNumber++;
  evidenceRows.push(<InnerCell key={aKeyNumber} />);
  aKeyNumber++;
  evidenceRows.push(<InnerCell key={aKeyNumber} />);
  aKeyNumber++;
}

const GhostHelperGrid = () => (
  <div className="ghost-helper-grid">
    <div></div>

    {columnHeaders}
    {evidenceRows}
  </div>
);

export default GhostHelperGrid;
