/**
 *
 * @param {array|json} obj - array or json
 * @param {any type} find - compare with value
 */
const findInArray = (obj, find) => {
  let found = false;
  for (let i = 0; i < obj.length; i++) {
    if (typeof obj[i] === 'object') {
      found = objectChecker(obj[i], find);
    } else if (obj[i] === find) {
      found = true;
    }

    if (found) {
      break;
    }
  }
  return found;
};
const findInJson = (obj, find) => {
  const keys = Object.keys(obj);
  let found = false;
  for (let i = 0; i < keys.length; i++) {
    if (typeof obj[keys[i]] === 'object') {
      found = objectChecker(obj[keys[i]], find);
    } else if (obj[keys[i]] === find) {
      found = true;
    }

    if (found) {
      break;
    }
  }
  return found;
};

const objectChecker = (obj, find) => {
  if (Array.isArray(obj)) {
    // loop array object
    return findInArray(obj, find);
  }

  if (obj.constructor === ({}).constructor) {
    // loop json object
    return findInJson(obj, find);
  }

  return false;
};

// loop through nested obj to find matched value
const findValueInObject = (obj, find) => {
  return objectChecker(obj, find);
};

export default findValueInObject;
