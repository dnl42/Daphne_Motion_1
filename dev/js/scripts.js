import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import $ from "jquery";

gsap.registerPlugin(ScrollTrigger);


// function scrollAnimation(){
    // var tl = gsap.timeline();
    // tl.to("#history", {
        ScrollTrigger.create({
            trigger: "#history-first",
            start: "top top",
            pin:true,
            pinSpacing:false,
            markers: true
    });

    ScrollTrigger.create({
        trigger: "#gallery-1",
        start: "top top",
        scale: 2,
        pin:true,
        pinSpacing:false,
        markers: true
});
    // return tl;
// }

// var mainTL = gsap.timeline();
// mainTL.add(scrollAnimation());


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