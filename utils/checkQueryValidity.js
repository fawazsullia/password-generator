//check if the query parameters are valid

function queryValid(queryObj, validQueries) {
  const keyArr = Object.keys(queryObj);

  for (let i = 0; i < keyArr.length; i++) {
    if (!(keyArr[i] in validQueries)) return { state: false, key: keyArr[i] };
  }

  return { state: true };
}

module.exports = queryValid;
