

(function() {
    let elementsL;
    let elementsR;
    let windowHeight;
    
  
    function init() {
      elementsL = document.querySelectorAll('.slideinonviewL');
      elementsR = document.querySelectorAll('.slideinonviewR');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
        
      for (let i = 0; i < elementsL.length; i++) {
        let element = elementsL[i];
        let positionFromTop = elementsL[i].getBoundingClientRect().top;
  
        if (positionFromTop <= windowHeight) {
        

            element.classList.add('slideinleft');
            element.classList.remove('hidden');
        }
      }
      for (let i = 0; i < elementsR.length; i++){
        let element = elementsL[i];
        let positionFromTop = elementsL[i].getBoundingClientRect().top;
  
        if (positionFromTop <= windowHeight) {
        

            element.classList.add('slideinRight');
            element.classList.remove('hidden');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  })();

  
  