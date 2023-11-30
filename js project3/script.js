/**
 * ek div banao aur uspar jab mouse chale to picture pop ho jayee
 * aur fir defa ho jayee
 */
    // Throttling Function
    const throttleFunction=(func, delay)=>{
      let prev = 0; 
      return (...args) => {
        let now = new Date().getTime(); 
        console.log(now-prev, delay); 
        if(now - prev> delay){ 
          prev = now;
          return func(...args);  
        }
      }
    }
   var center = document.querySelector('#center')
    center.addEventListener("mousemove", throttleFunction((details)=>{
      // less repeatation code
     var div = document.createElement('div');
     var image = document.createElement('img');
     image.setAttribute('src',"https://images.unsplash.com/photo-1695653422259-8a74ffe90401?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D");
     div.classList.add('imagediv');
     div.style.left = details.clientX+'px';
     div.style.top = details.clientY+'px';
     div.appendChild(image);
     document.body.appendChild(div)
     gsap.to(image, {
        y: "0",
        ease: Power1,
        duration:.4
     });
     gsap.to(image,{
        y:'100%',
        delay: .4,
        ease: Power2,
     })
     setTimeout(function(){
        div.remove();
     },2000)

    }, 400));

/**
 * Throttling kisi particaular code ke number of execution ko kam kardena
 * 
 */