var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");

 main.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x +"px"   
    cursor.style.top = dets.y + "px"
 })
 
 
 document.querySelector("#over i").addEventListener("mousemove", function(dets){
   document.querySelector("#cri").style.scale =1
   document.querySelector("#cri").style.opacity =1
   cursor.style.opacity = 0;
   document.querySelector("#over i").style.color = "white"
 })
 document.querySelector("#over i").addEventListener("mouseleave", function(){
   document.querySelector("#cri").style.scale = 0
   document.querySelector("#cri").style.opacity =
   cursor.style.opacity = 1;
   document.querySelector("#over i").style.color = "Black"
 })
document.querySelector("#overlay1").addEventListener("mousemove", function(dets){
   document.querySelector("#elm1 video").style.scale = 1
   document.querySelector("#elm1 video").style.opacity = 1
   cursor.style.opacity = 0;
   document.querySelector("#elm1 video").style.left = (dets.x-250)+"px";
   document.querySelector("#elm1 video").style.top = (dets.y-390) + "px";
})
document.querySelector("#overlay1").addEventListener("mouseleave", function(dets){
   document.querySelector("#elm1 video").style.scale = 0
   document.querySelector("#elm1 video").style.opacity = 0
   cursor.style.opacity = 1;
})
document.querySelector("#overlay2").addEventListener("mousemove", function(dets){
   document.querySelector("#elm2 video").style.scale = 1
   document.querySelector("#elm2 video").style.opacity = 1
   cursor.style.opacity = 0;
   document.querySelector("#elm2 video").style.left = (dets.x-650)+"px";
   document.querySelector("#elm2 video").style.top = (dets.y-350) + "px";
})
document.querySelector("#overlay2").addEventListener("mouseleave", function(dets){
   document.querySelector("#elm2 video").style.scale = 0
   document.querySelector("#elm2 video").style.opacity = 0
   cursor.style.opacity = 1;
})
document.querySelector("#overlay3").addEventListener("mousemove", function(dets){
   document.querySelector("#elm3 video").style.scale = 1
   document.querySelector("#elm3 video").style.opacity = 1
   cursor.style.opacity = 0;
   document.querySelector("#elm3 video").style.left = (dets.x-900)+"px";
   document.querySelector("#elm3 video").style.top = (dets.y-350) + "px";
})
document.querySelector("#overlay3").addEventListener("mouseleave", function(dets){
   document.querySelector("#elm3 video").style.scale = 0
   document.querySelector("#elm3 video").style.opacity = 0
   cursor.style.opacity = 1;                                                              
})