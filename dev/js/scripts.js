import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import $ from "jquery";

gsap.registerPlugin(ScrollTrigger);


        ScrollTrigger.create({
            trigger: "#history-first",
            start: "top top",
            pin:true,
            pinSpacing:false,
            markers: false
    });

function ImageAnimation(){
    var tl = gsap.timeline({scrollTrigger:{
        trigger:"#skynet", 
        markers: false, 
        scrub:2,
        end:"center center"}});
    tl.from("#gallery-1", {duration: 1, delay: 1, opacity: 0})
    tl.from("#gallery-2", {duration: 1, delay: .25, opacity: 0})
    tl.from("#gallery-3", {duration: 1, delay: .25, opacity: 0})
    tl.from("#gallery-4", {duration: 1, delay: .25, opacity: 0})
    tl.from("#gallery-5", {duration: 1, delay: .25, opacity: 0})
    tl.from("#gallery-6", {duration: 1, delay: .25, opacity: 0})
    
    return tl;
}

gsap.from(".yellow-bar", {
    scrollTrigger: {
      trigger: ".yellow-bar",
      scrub: true,
      start: "top bottom",
      end: "center center"
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none"
  });

var mainTL = gsap.timeline();
mainTL.add(ImageAnimation());





let $nav = $('nav[data-nav]');
let isVisible = false;

$(".nav-btns").on("click", function(){
    console.log("click");
    if(isVisible === false){
        $nav.show();
        isVisible = true;
    }
    else{
        $nav.hide();
        isVisible = false;
    }
})