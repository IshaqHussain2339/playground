/*Single element

// var elam1 = document.querySelector('#elam1');
// var elamImage = document.querySelector('#elam1 img');


// elam1.addEventListener('mousemove', function(dets){
//     elamImage.style.left = dets.x+'px'
//     elamImage.style.top = dets.y+'px';
    
    
// });

// elam1.addEventListener('mouseenter', function(dets){
//     elamImage.style.opacity = 1
// });
// elam1.addEventListener('mouseleave', function(dets){
//     elamImage.style.opacity = 0;
// });
single elsement
*/
// all images
var elam = document.querySelectorAll('.elam');
elam.forEach(function(val){

    val.addEventListener('mouseenter',function(){
        val.childNodes[3].style.opacity = 1;
        
    });
    val.addEventListener('mouseleave',function(){
        val.childNodes[3].style.opacity = 0;

    })
    val.addEventListener('mousemove',function(dets){
        val.childNodes[3].style.left = dets.x+'px';
        val.childNodes[3].style.top = dets.y+'px';
    })
})