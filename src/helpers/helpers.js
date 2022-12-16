export default {
  checkScreenSize: function() {
    if (window.innerWidth <= 1366) {
      return true;
    }

    return false;
  }
}
