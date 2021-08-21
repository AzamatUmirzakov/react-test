/**
 * Makes a deep copy of passed object and returns it
 * @param {Object} object - object to copy
 * @returns {Object} deep clone of the passed object
 */

const cloneDeep = (object) => {
  if (object === null) return null;
  let clone = {};
  for (let key in object) {
    if (typeof object[key] == "object") {
      clone[key] = cloneDeep(object[key]);
    } else {
      clone[key] = object[key];
    }
  }
  if (Array.isArray(object)) {
    clone.length = object.length;
    return Array.from(clone);
  }
  return clone;
};

export default cloneDeep;
