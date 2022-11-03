import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function simpleMotion(){
      var line = document.querySelector("#center-line");
      line = line.getBBox();
  
      var topBall = document.querySelector("#top-ball");
      topBall = topBall.getBBox();
  

      gsap.set("#top-ball",{x:line.width / 2 + topBall.width / 2, transformOrigin:"center" })
      gsap.set("#bottom-ball",{x:-line.width/2 - topBall.width / 2, transformOrigin:"center" })

    var tl = gsap.timeline();
    tl.from("#bottom-ball",{scale:0, duration:0.25, drawSVG: 0})
      .from("#top-ball",{scale:0, duration:0.25},"-=50%")
      .to("#bottom-ball",{x:0, duration:0.25},"rollOut")
      .to("#top-ball",{x:0, duration:0.25},"rollOut")
      .fromTo("#center-line",{drawSVG:"50% 50%"},{duration:0.25, drawSVG: "0% 100%"},"rollOut")
      .from("#light-green",{duration: 0.25, scale:0, transformOrigin: "-50"},"-=50%")
      .from("#dark-green",{duration: 0.25, scale:0, transformOrigin: "150"},"-=50%")
      .from("#yellow",{scale:0, duration:1, transformOrigin: "center", drawSVG:"0% 0%"},"rollOut")
    

    return tl;

}

function patternMotion(){

    var tl = gsap.timeline();

    tl.from(".odd",{duration:2, drawSVG:0, stagger:0.25, rotate:180, transformOrigin:"center"},"spin")
    .fromTo(".even",{drawSVG:"0% 0%"},{duration:2, drawSVG:"0% -100%", stagger:0.25, rotate:180, transformOrigin:"center"},"spin");
    return tl;
}

function UIMotion(){

    var first = document.querySelector("#Rectangle-1");
      first = first.getBBox();
      console.log(first.height);

    var tl = gsap.timeline();
    tl.from ("#Rectangle-1",{duration: 0.25, scale:0, transformOrigin:"first"},"-=50%"),
    tl.to ("#Rectangle-1",{duration: 0.25, x: -first.height / 2},"-=50%"),

    tl.from ("#Rectangle-2",{duration: 0.25, scale:0, transformOrigin:"first"},"-=50%"),
    tl.to ("#Rectangle-2",{duration: 0.25, x: -first.height / 2},"-=50%"),

    tl.from ("#Rectangle-3",{duration: 0.25, scale:0, transformOrigin:"first"},"-=50%"),
    tl.to ("#Rectangle-3",{duration: 0.25, x: -first.height / 2},"-=50%"),

    tl.from ("#Rectangle-4",{duration: 0.25, scale:0, transformOrigin:"first"},"-=50%"),
    tl.to ("#Rectangle-4",{duration: 0.25, x: -first.height / 2},"-=50%"),

    tl.from ("#Rectangle-5",{duration: 0.25, scale:0, transformOrigin:"first"},"-=50%"),
    tl.to ("#Rectangle-5",{duration: 0.25, x: -first.height / 2},"-=50%")
    return tl;
}


var mainTL = gsap.timeline();
mainTL.add(simpleMotion())
.add(patternMotion())
.add(UIMotion())



GSDevTools.create();