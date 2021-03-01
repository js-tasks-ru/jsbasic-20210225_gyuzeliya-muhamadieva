function checkSpam(str) {
  const targets = ['1XbeT', 'xxxxx'];

  for (let target of targets) {
    if (str.toLowerCase().includes(target.toLowerCase())) {
      return true;
    }
  }
  return false;
}
