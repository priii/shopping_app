
function loadData(){
  var userInput  = $('#userInput').val();
  // getting walmart api data
    var walmartUrl ='http://api.walmartlabs.com/v1/search?&apiKey=qswmjt3rs66uv5adcpqxhtpp&&query='+userInput;
    $.ajax({
      url: walmartUrl,
      dataType: 'jsonp',
      type: 'GET',
      contentType: 'application/json',
      success: function(data, status){
        var data_temp = data.items; //  storing the value of the ai datain a temp variable
        console.log(data_temp);
        //looping through the all the data
      for(var i=0; i< data_temp.length; i++){
        var data = data_temp[i];
        $("#displayArea").prepend('<ul class="result">'+'<a href="'+data.productUrl+'">"'+data.name+'</a>'+'<br>'+'</ul>');
        // console.log(data.items[0].productUrl);
       }
        },
      error: function(data){
        alert("could not load data from walmart.")
      }
  });
}

  $("#enter").on("click",function(){
    loadData();
  });
