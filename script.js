
function loadData(){
  var userInput  = $('#userInput').val();
  var $walmartElem = $("#displayArea");
  var $amazonElem = $("#amazonDisplay");

  $walmartElem.text("");
  // getting walmart api data
    var walmartUrl ='http://api.walmartlabs.com/v1/search?&apiKey=qswmjt3rs66uv5adcpqxhtpp&&query='+userInput;
    $.ajax({
      url: walmartUrl,
      dataType: 'jsonp',
      type: 'GET',
      contentType: 'application/json',
      success: function(data, status){

        var data_temp = data.items; //  storing the value of the ai datain a temp variable
        //console.log(data_temp);
        //looping through the all the data
      for(var i=0; i< data_temp.length; i++){
        var data = data_temp[i];
        //displaying the product link and images of the product from the data recieved from walmart api url
        $("#displayArea").prepend(`<ul class="result">`+'<img alt="Images" style= "width:128px;height:128px" src='+data.largeImage+'>'+'<a href="'+data.productUrl+'">"'+data.name+'<br>'+'Sale Price: $'+ data.salePrice+'</a>'+'<br>'+'</ul>');
        // console.log(data.items[0].productUrl);
        //console.log(data.largeImage);
       }
        },
      error: function(data){
        alert("could not load data from walmart.")
      }
  });
  // getting amazon url
  var amazonUrl ='http://webservices.amazon.com/onca/xml?Service=AWSECommerceService&Operation=ItemSearch&AWSAccessKeyId=AKIAJICZAX62A6DHVS6Q&AssociateTag=990d4-20&SearchIndex=Books&Keywords=HarryPotter&ResponseGroup=Images,ItemAttributes,Offers';
  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url: amazonUrl,
    success: function(data) {
      console.log("success", data);
    },
    error:function(data){
      $amazonElem.text("Amazon Could not be  loaded ");
    }
  });
}
  $("#enter").on("click",function(){
    loadData();
  });
// keyboard enter button operation
 var value = document.getElementById("userInput");
  value.onkeyup = function(e) {
      if(e.keyCode === 13){
        loadData();
      }
    }
