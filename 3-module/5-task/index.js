function getMinMax(str) {
  let result = str.split(/[,\s*]\s*/).map(el => parseFloat(el)).filter(el => !isNaN(el)).sort((a, b) => a - b);
  return {
    min: result[0],
    max: result[result.length - 1]
  };
}
