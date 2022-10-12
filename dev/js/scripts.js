import { gsap } from "gsap";

gsap.set("button i",{transformOrigin:"center bottom"});

function heroAnimation(){
    var tl= gsap.timeline();
    tl.from("#first-line",{duration:0.5, alpha:0, y:-100})
    .from("#second-line",{duration:0.5, alpha:0, y:-50, delay:0.25})
    .from("#learn-btn",{duration:0.5, alpha:0, y:50, delay:0.35})
    .from("#learn-btn i",{duration:0.75, alpha:0, rotate:-360, delay:0.5});
    return tl;
}

var mainTL= gsap.timeline();
mainTL.add(heroAnimation());

let mm = gsap.matchMedia();

var buttonSize = 1;

mm.add("(min-width: 800px)", () => {
  // desktop setup code here...
  buttonSize = 2;
});

mm.add("(max-width: 799px)", () => {
  // mobile setup code here...
  buttonSize = 1.25;
});

var buttonAnimation = gsap.timeline({paused: true});
buttonAnimation.to("#learn-btn",{duration:0.25, scale:buttonSize})

// let button = document.querySelector("#learn-btn");
// button.addEventListener("mouseover",function(){
    .to("#learn-btn",{duration:0.25, scale:2})
    .to("#learn-btn i",{duration:0.25, x: 40})
    .to("#first-line",{duration:0.25, alpha:0, y:50})
    .to("#second-line",{duration:0.25, alpha:0, y:25});



let button = document.querySelector("#learn-btn");
button.addEventListener("mouseover",function(){
    buttonAnimation.play();
});

button.addEventListener("mouseout",function(){
    buttonAnimation.reverse();
});


// button.addEventListener("mouseout",function(){
//     gsap.to("#learn-btn",{duration:0.25, scale:1});
//     gsap.to("#learn-btn i",{duration:0.25, x: 0});

//     gsap.to("#first-line",{duration:0.25, alpha:1, y:0});
//     gsap.to("#second-line",{duration:0.25, alpha:1, y:0});
// });