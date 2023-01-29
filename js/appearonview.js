

(function() {
    let elements;
    let windowHeight;
    
  
    function init() {
      elements = document.querySelectorAll('.slideinonview');
      console.log(elements);
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
        
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let positionFromTop = elements[i].getBoundingClientRect().top;
  
            if (positionFromTop <= windowHeight) {
        

                element.classList.add('slideinleft');
                element.classList.remove('hidden');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  })();

  
  