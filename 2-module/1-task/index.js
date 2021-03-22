const salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
};

function sumSalary(salaries) {
  let sumSalaries = 0;
  for (const prop in salaries) {
    if (salaries.hasOwnProperty(prop) && isFinite(salaries[prop])) {
      sumSalaries += salaries[prop];
    }
  }
  return sumSalaries;
}
