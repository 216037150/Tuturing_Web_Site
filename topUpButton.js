function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    var btn = document.getElementById("top-up-btn");
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }
  