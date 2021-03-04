const SPAM_TARGETS = ['1XbeT', 'xxxxx'];

function checkSpam(str) {
  const lowerCaseStr = str.toLowerCase();

  for (const target of SPAM_TARGETS) {
    if (lowerCaseStr.includes(target.toLowerCase())) {
      return true;
    }
  }
  return false;
}
