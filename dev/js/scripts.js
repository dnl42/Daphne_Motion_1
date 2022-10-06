import { gsap } from "gsap";


gsap.set("button i",{transformOrigin:"center bottom"});

gsap.from("#first-line",{duration:0.5, alpha:0, y:-100});
gsap.from("#second-line",{duration:0.5, alpha:0, y:-50, delay:0.25});
gsap.from("#learn-btn",{duration:0.5, alpha:0, y:50, delay:0.35});
gsap.from("#learn-btn i",{duration:0.75, alpha:0, rotate:-360, delay:0.5});

let button = document.querySelector("#learn-btn");
button.addEventListener("mouseover",function(){
    gsap.to("#learn-btn",{duration:0.25, scale:2});
    gsap.to("#learn-btn i",{duration:0.25, x: 40});
    gsap.to("#first-line",{duration:0.25, alpha:0, y:50});
    gsap.to("#second-line",{duration:0.25, alpha:0, y:25});

});

button.addEventListener("mouseout",function(){
    gsap.to("#learn-btn",{duration:0.25, scale:1});
    gsap.to("#learn-btn i",{duration:0.25, x: 0});

    gsap.to("#first-line",{duration:0.25, alpha:1, y:0});
    gsap.to("#second-line",{duration:0.25, alpha:1, y:0});
});