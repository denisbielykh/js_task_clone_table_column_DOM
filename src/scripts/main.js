'use strict';

const tableChildren = document.querySelector('table').children;
const SECOND_COLUMN = 1;

for (const el of tableChildren) {
  for (const tr of el.children) {
    const newElem = tr.children[SECOND_COLUMN].cloneNode(true);

    tr.lastElementChild.insertAdjacentElement('beforebegin', newElem);
  }
}
