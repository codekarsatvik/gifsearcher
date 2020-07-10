/* 1. Grab the input value */

$("button").click(function(){var input = document.querySelector("input").value;
console.log(input)
getInput(input);
 });
$('input').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      var input = document.querySelector("input").value;
      getInput(input);
    }
});
// var input = document.querySelector("input").value;





/* 2. do the data stuff with the API */
function getInput(input){
var url = "http://api.giphy.com/v1/gifs/search?q=\""+ input + "\"&api_key=mJbWiomXlwq7LHmQiwCc15uKeckMLWso";

// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();


GiphyAJAXCall.addEventListener('load', function( data ) {
  // console.log(data.target.response);
  pushToDom(data.target.response);

// your callback events go here

});
}









/* 3. Show me the GIFs */

function pushToDom(input){
  document.querySelector(".js-container").innerHTML = null ;
  var gif=JSON.parse(input);
  var imageurls =  gif.data;
  imageurls.forEach(function(image) {

    var src = image.images.fixed_height.url;
    console.log(src);
    var url = gif.data[0].images.fixed_height.url;

  document.querySelector(".js-container").innerHTML = document.querySelector(".js-container").innerHTML + "<img src=\"" +src+  "\" class='container-image' >"

  });



}
