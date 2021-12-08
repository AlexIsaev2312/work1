 document.body.onclick = function(event){
    //  slaider left min icon
    event = event || window.event;
     if (event.target.classList.contains('firstimg')){
         document.getElementById('max-img').src = event.target.src
    }
    if (event.target.classList.contains('secondimg')){
        document.getElementById('max-img').src = event.target.src
   }
   if (event.target.classList.contains('treeimg')){
        document.getElementById('max-img').src = event.target.src
    }
    if (event.target.classList.contains('forimg')){
        document.getElementById('max-img').src = event.target.src
   }

   
   
}

