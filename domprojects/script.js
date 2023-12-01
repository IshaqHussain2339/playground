var heading5 = document.querySelector('h5');

var addbtn = document.querySelector('#add');
// var removebtn = document.querySelector('#remove');
var check = 0;
addbtn.addEventListener('click', function(){
   if(check == 0){
    heading5.innerHTML = 'Friends'
    heading5.style.color = 'green'
    addbtn.innerHTML = "Remove Friend"
    check = 1
   } else {
    heading5.innerHTML = 'Stranger'
    heading5.style.color = 'red'
    addbtn.innerHTML = 'Add Friend'
    check = 0
   }
});

// removebtn.addEventListener('click', function(){
//     heading5.innerHTML = 'Stranger';
//     heading5.style.color = 'red'
// });