function getCellIndex (rows, textContent) {
  for (let i = 0; i < rows.cells.length; i++) {
    if (rows.cells[i].textContent === textContent) {
      return rows.cells[i].cellIndex;
    }
  }
}

function highlight(table) {
  const rows = table.rows;
  const statusIdx = getCellIndex(rows[0], 'Status');
  const genderIdx = getCellIndex(rows[0], 'Gender');
  const ageInx = getCellIndex(rows[0], 'Age');

  for (let i = 1; i < rows.length; i++) {

    let statusCell = rows[i].cells[statusIdx];
    if (!statusCell.hasAttribute('data-available')) {
      rows[i].hidden = true;
    } else if (statusCell.getAttribute('data-available') === 'true') {
      rows[i].classList.add('available');
    } else {
      rows[i].classList.add('unavailable');
    }

    let genderCell = rows[i].cells[genderIdx];
    if (genderCell.textContent === 'm') {
      rows[i].classList.add('male');
    } else if (genderCell.textContent === 'f') {
      rows[i].classList.add('female');
    }

    let ageCell = rows[i].cells[ageInx];
    if (ageCell.textContent < 18) {
      rows[i].style.textDecoration = 'line-through';
    }
  }
}
