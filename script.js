
$(function(){
  $("#enter").on("click",function(){
    var userInput  = $("userInput").val();
    var walmartUrl ='http://api.walmartlabs.com/v1/search?&apiKey=qswmjt3rs66uv5adcpqxhtpp&&query=electronics';
    $.ajax({
      url: walmartUrl,
      dataType: 'jsonp',
      type: 'GET',
      contentType: 'application/json',
      success: function(data, status){
        //$("#displayArea").html();
        var data1 = data.items[0].productUrl;
        $("#displayArea").prepend(data1);
         console.log(data.items[0].productUrl)
        },
      error: function(data){
        alert("could not load data from walmart.")
      }
  });
});
});
