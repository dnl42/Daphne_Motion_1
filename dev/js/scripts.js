import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import $ from "jquery";

gsap.registerPlugin(ScrollTrigger);


function scrollAnimation(){
    var tl = gsap.timeline();
    tl.to("#hero", {
        duration: 1,
        x: 0,
        scrollTrigger: {
            trigger: "#hero",
            // toggleActions: "restart pause reverse pause",
            markers:true,
            start: "50px 50%",
            end: "60% 10%",
            scrub: true,
            pin: true
        }
    });
    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(scrollAnimation());


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