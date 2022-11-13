/**
 * @class Utils
 * The Utils class contains the utility methods to use in the different classes
 */
class Utils {
  /**
   * It returns the hash of the current URL, or '/' if there is no hash
   * @access public
   * @returns {String} The hash of the current url.
   */
  static getHash() {
    return window.location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
  }
}

export default Utils;