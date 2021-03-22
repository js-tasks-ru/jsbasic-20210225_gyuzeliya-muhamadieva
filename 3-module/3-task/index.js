function camelize(str) {
  if (!str) {
    return str;
  }

  return str
    .split('-')
    .map((elem, idx) => idx === 0 ? elem : elem.charAt(0).toLocaleUpperCase() + elem.slice(1))
    .join('');
}
