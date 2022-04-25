

window.onload = function() {
    // document.addEventListener('click',myFunction)
   
  var element = document.getElementById('submit-btn')
    element.addEventListener('click',onSubmitClick)
    

    var element1 = document.getElementById('type')
    element1.addEventListener('change',changeType)

    document.getElementById('reordered-container').style.display = 'none'
    document.getElementById('voice-container').style.display = 'block'
    // document.getElementById('toxic-group').style.display = 'none'



    
  //   console.log();
  //   if (picture_type == ) {
  //     document.getElementById('picture_div').innerHTML = '<a href="predefined_pics.php">Click here</a> to select one.';
  // }
    
    
  };

  function onSubmitClick() {
    // setTimeout(function(){
      
    // }, 1000);
    // $.post('/',{'active': 'i hate you', 'passive':'you are hated by meeeeee'},
    //         function(data) {
    //           console.log(data);
    //           console.log("dfdfdfg");
    //     });
   $.ajax({
          type: 'POST',
          url: '/',
          data: '{"active": "i hate you", "passive":"you are hated by meeeeee"}', // or JSON.stringify ({name: 'jonas'}),
          success: function(data) { alert('data: ' + data); },
          contentType: "application/json",
          dataType: 'json'
      });
    


    document.getElementById('active-bar').style.width = 100+'%';
    document.getElementById('passive-bar').style.width = 70+'%';
    document.getElementById('difference-bar').style.width = 30+'%';
    document.getElementById('toxic-group').style.display = 'block'
  }
  function changeType() {
    var element2 = document.getElementById('type')
    console.log(element2.value);
    
    if (element2.value == 'voice') {
      document.getElementById('reordered-container').style.display = 'none'
      document.getElementById('voice-container').style.display = 'block'
    }
    else{
      document.getElementById('voice-container').style.display = 'none'
      document.getElementById('reordered-container').style.display = 'block'
    }
    
  }