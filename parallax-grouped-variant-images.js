// selected variant id is pulled from url
  var url = window.location.href;
  var parts = url.split('=');
  var id = parts[parts.length - 1];
  let olis = document.querySelectorAll("ol");

 
// products have 1 option (color), select the one below if  
  
jQuery('form[action="/cart/add"]').on('change', '.single-option-selector', function() {
  
  var url = window.location.href;
  var parts = url.split('=');
  var id = parts[parts.length - 1];
  var inner = document.querySelector('select option[value="'+id+'"]').text;
   console.log(id+" "+inner);
  srcs = [];
   var ols = document.querySelectorAll("ol");
  
  //hide all at first place
  try {
  var imgElement = document.querySelector('img[alt="'+inner+'"]').getAttribute("src");
}
catch(err) {
  ols.forEach(hideAll);
}
  
  
  // find thumbnails that are related with variant or that are should be displayed everytime
  var imgElements = document.querySelectorAll('img[alt*="'+inner+'"]');
  var forAlls = document.querySelectorAll('img[alt*="forAll"]');
  
 
  
  console.log(imgElement);
  console.log(imgElements);
	
  imgElements.forEach(image);  forAlls.forEach(image);

  
 
  ols.forEach(child);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

  function image(img){
  var src = img.getAttribute("src");
  if(srcs.indexOf(src) === -1){
      srcs.push(src);
  }}
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
  
function child(ol) {
  ol.childNodes.forEach((function(li) {
   var temp = li.querySelector('img').getAttribute("src");
    if(srcs.includes(temp)){
		li.style.display = "inline-block";  //display the requested ones(they are in Array "srcs")
    	console.log(li);
      						}
    else {
    li.style.display = "none";				//hide others
    }
        }))};
  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  function hideAll(ol) {
  ol.childNodes.forEach((function(li) {
		li.style.display = "none";
        }))};



});    



