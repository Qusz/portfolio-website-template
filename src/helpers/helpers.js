export default {
  checkScreenSize: function() {
    if (window.innerWidth <= 1024) {
      return true;
    }

    return false;
  }
}
