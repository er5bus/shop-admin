/**
 * RemoveStorage: removes a key from localStorage and its sibling expiracy key
 *
 * @param key <string>     : localStorage key to remove
 * @return <boolean> : telling if operation succeeded
 */
export const removeStorage = (key) => {
  try {
    localStorage.setItem(key, "");
  } catch (e) {
    console.log(
      "removeStorage: Error removing key [" +
      key +
      "] from localStorage: " +
      JSON.stringify(e)
    );
    return false;
  }
  return true;
}

/**
 * GetStorage: retrieves a key from localStorage previously set with setStorage().
 * @param key <string> : localStorage key
 * @return <string> : value of localStorage key
 * @return <null> : in case of expired key or failure
 */
export const getStorage = (key) => {
  try {
    const value = localStorage.getItem(key)
    return JSON.parse(value)
  } catch (e) {
    console.log(
      "getStorage: Error reading key [" +
      key +
      "] from localStorage: " +
      JSON.stringify(e)
    );
    return null;
  }
}

/**
 * SetStorage: writes a key into localStorage setting a expire time
 * @param key <string>     : localStorage key
 * @param value <string>   : localStorage value
 * @param <boolean> : telling if operation succeeded
 */
export const setStorage = (key, value) => {

  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.log(
      "setStorage: Error setting key [" +
      key +
      "] in localStorage: " +
      JSON.stringify(e)
    );
    return false;
  }
  return true;
}
