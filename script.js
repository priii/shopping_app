
$(function(){
  $("#enter").on("click",function(){
    var userInput  = $('#userInput').val();
    console.log(userInput);
    var walmartUrl ='http://api.walmartlabs.com/v1/search?&apiKey=qswmjt3rs66uv5adcpqxhtpp&&query='+userInput;
    $.ajax({
      url: walmartUrl,
      dataType: 'jsonp',
      type: 'GET',
      contentType: 'application/json',
      success: function(data, status){
        //$("#displayArea").html();
        //var data1 = data.items[0].productUrl;
        var data_temp = data.items;
        console.log(data_temp);
      //  $("#displayArea").prepend('<a href='+ data1+'</a>');
      for(var i=0; i< data_temp.length; i++){
        var data = data_temp[i];
        $("#displayArea").prepend('<li class="result">'+'<a href="'+data.productUrl+'">"'+data.name+'</a>'+'<br></li>');
        // console.log(data.items[0].productUrl);

       }
        },
      error: function(data){
        alert("could not load data from walmart.")
      }
  });
});
});
