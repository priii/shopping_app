
function loadData(){
  var userInput  = $('#userInput').val();
  var $walmartElem = $("#displayArea");
  var $amazonElem = $("#amazonDisplay");

  $walmartElem.text("");
  // getting walmart api data reference :https://developer.walmartlabs.com/docs/read/Search_API
    var walmartUrl ='http://api.walmartlabs.com/v1/search?&apiKey=qswmjt3rs66uv5adcpqxhtpp&&query='+userInput+'&numItems=25';
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
// ebay ajax Request
var uri = userInput;
var res = encodeURI(uri);
var ebayUrl ="http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=Priyadha-Shopping-PRD-67a9d82e9-6fa003ca&GLOBAL-ID=EBAY-US&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords="+res+"&paginationInput.entriesPerPage=30";

    //ajax Request
    $.ajax({
      url: ebayUrl,
      dataType: 'JSONP',
      type: 'GET',
      contentType: 'application/json',
      success: function(data, status){
        var items = data.findItemsByKeywordsResponse[0].searchResult[0].item;
        for (var i = 0; i < items.length; ++i){
          var item = items[i];
          var title = item.title;
          var pic = item.galleryURL;
          var viewitem = item.viewItemURL;
         var price = item.sellingStatus[0].currentPrice[0]['__value__'];
         $("#ebayDisplay").prepend(`<ul class="result">`+'<img alt="Images" style= "width:128px;height:128px" src='+pic+'>'+'<a href="'+viewitem+'">"'+title+'<br>'+'Sale Price: $'+ price+'</a>'+'<br>'+'</ul>');//'Sale Price: $'+ price+
         //console.log(price);
        }

          //console.log(items);
        //  console.log(items[0].discountPriceInfo[0]);
          //console.log(items[0].discountPriceInfo[0].originalRetailPrice[0].__value__);
            //console.log(items[0].galleryURL);


        },
      error: function(data){
        alert("could not load data from ebay.")
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
