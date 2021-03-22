function sumSalary(salaries) {
  let sumSalaries = 0;
  for (const prop in salaries) {
    if (isFinite(salaries[prop])) {
      sumSalaries += salaries[prop];
    }
  }
  return sumSalaries;
}
