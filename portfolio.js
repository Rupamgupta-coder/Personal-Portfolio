





//Hero Section//
let heroimg = document.querySelector(".heroimage img");
let originalsrc ="bg1.jpg";
let changesrc="rup.png";
heroimg.addEventListener("click",function() {
   console.log(heroimg.src)
   if(heroimg.src.includes(originalsrc)){
      console.log("image changed")
      heroimg.src= changesrc;
   }
   else{
      console.log("image not changed")
       heroimg.src=originalsrc;
   }
})

function scrollToSection(about){
   window.location.hash = '#' + about;
}

   
 function scrollToSection(skills){
   window.location.hash = '#' + skills;
}
  
function scrollToSection(education){
   window.location.hash = '#' + education;
}
  
function scrollToSection(projects){
   window.location.hash = '#' + projects;
}
function scrollToSection(contact){
   window.location.hash = '#' + contact;
}
function scrollToSection(home){
   window.location.hash = '#' + home;
}
function goHome(){
   window.location.href ="home";
}