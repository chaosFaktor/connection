(function () {
  let elementsL;
  let elementsR;
  let windowHeight;

  function init() {
    elementsL = document.querySelectorAll(".slideinonviewL");
    elementsR = document.querySelectorAll(".slideinonviewR");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    // Slideinonview L
    for (let i = 0; i < elementsL.length; i++) {
      let element = elementsL[i];
      let positionFromTop = elementsL[i].getBoundingClientRect().top;

      if (positionFromTop <= windowHeight) {
        element.classList.add("slideinleft");
        element.classList.remove("slideinonviewL");
      }
    }
    //  Slideinonview R
    for (let i = 0; i < elementsR.length; i++) {
      let element = elementsL[i];
      let positionFromTop = elementsL[i].getBoundingClientRect().top;

      if (positionFromTop <= windowHeight) {
        element.classList.add("slideinright");
        element.classList.remove("slideinonviewR");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("load", init);
  window.addEventListener("load", checkPosition);

  init();
  checkPosition();
})();
