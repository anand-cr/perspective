

window.onload = function() {
    // document.addEventListener('click',myFunction)
    var element = document.getElementById('submit-btn')
    element.addEventListener('click',myFunction)

    var element1 = document.getElementById('type')
    element1.addEventListener('change',changeType)
    
    
  };

  function myFunction() {
    console.log("hello");
    
    document.getElementById('active-bar').style.width = 100+'%';
    document.getElementById('passive-bar').style.width = 70+'%';
    document.getElementById('difference-bar').style.width = 30+'%';
  }
  function changeType() {
    var element2 = document.getElementById('type')
    console.log(element2.value);
    
  }