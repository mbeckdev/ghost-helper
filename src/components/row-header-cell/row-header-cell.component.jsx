import React from 'react';

import './row-header-cell.styles.scss';

// let itWasClicked = false;
let itWasClicked = true;

function wasClicked(here) {
  console.log('was clicked');
  let dur = findChildIndex(here);
  // itWasClicked = true;
  console.log('findChildIndex = ' + dur);
}

function findChildIndex(node) {
  console.log('findchildindex =');
  console.log(node.target);

  let clickedElement = node.target;

  var index = 1; // nth-child starts with 1 = first child
  // (You could argue that you should throw an exception here if the
  // `node` passed in is not an element [e.g., is a text node etc.]
  // or null.)

  let aNode = clickedElement.parentElement;
  while (aNode.previousSibling) {
    aNode = aNode.previousSibling;
    if (aNode && aNode.nodeType === 1) {
      // 1 = element
      ++index;
    }
  }
  return index;
}

const RowHeaderCell = (props) => (
  <div
    className={
      itWasClicked
        ? `${props.title} highlighted row-header-cell`
        : 'title row-header-cell'
    }
    onClick={wasClicked}
  >
    {props.title}
  </div>
);

export default RowHeaderCell;

// /* <div className="row-header-cell" onClick={wasClicked}>
//     <div className={itWasClicked ? 'title highlighted' : 'title'}>
// {props.title}
// </div>
// </div> */
