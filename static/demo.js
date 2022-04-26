

window.onload = function() {
    // document.addEventListener('click',myFunction)
   
  var element = document.getElementById('submit-btn')
    element.addEventListener('click',onSubmitClick)
  var element = document.getElementById('fix')
    element.addEventListener('click',function(){
      document.getElementsByClassName('hide')[0].style.display = 'block'
    })
    

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
    // var postData = {
    //   a:'you are hated by meeeeee',
    //   b: 'i hate you',
    // } 
    
    active = document.getElementById('active1').value
    passive = document.getElementById('passive1').value
    
   $.ajax({
          type: "POST",
          url: "/",
          // data: JSON.stringify(postD ata), // or JSON.stringify ({name: 'jonas'}),
          data: JSON.stringify({active:active ,passive : passive}), // or JSON.stringify ({name: 'jonas'}),
          success: function(data) {
            $('.activeT').html(data['activeT'])
            $('.active-bar').width(data['activeT']+'%')
            $('.passiveT').html(data['passiveT'])
            $('.passive-bar').width(data['passiveT']+'%')
            $('.differ').html(data['diff'])
            $('.avg').html(data['avg'])
            $('.difference-bar').width(data['diff']+'%')
            $('.avg-bar').width(data['avg']+'%')
            $('.min').html(data['min'])
            $('.min-bar').width(data['min']+'%')
            $('.max').html(data['max'])
            $('.max-bar').width(data['max']+'%')
            $('.wavg').html(data['wAvg'])
            $('.wavg-bar').width(data['wAvg']+'%')
            
            
            // document.getElementById('active-bar').style.width = data['activeT']+'%';
            // document.querySelectorAll('activeT').innerHTML = data['activeT']
            // document.getElementsByClassName('passiveT').innerHTML = data['passiveT']
            // document.getElementsByClassName('differ').innerHTML = data['diff']
            // document.getElementsByClassName('avg').innerHTML = data['avg']
            // document.getElementById('active-bar').style.width = data['activeT']+'%';
          
          },
            
          contentType: "application/json",
          dataType: 'json'
      });
    


    // document.getElementById('active-bar').style.width = 100+'%';
    // document.getElementById('passive-bar').style.width = 70+'%';
    // document.getElementById('difference-bar').style.width = 30+'%';
    // document.getElementById('toxic-group').style.display = 'block'
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