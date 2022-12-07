import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);
gsap.registerPlugin(MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

function Shapes(){

    var tl = gsap.timeline();
    tl.from("#shape1",{duration: .5, x:-1000, y :-1000, rotate: 180})
    tl.from("#shape2",{duration: .5, x:0, y :-1000, rotate: 180},"-=.25")
    tl.from("#shape3",{duration: .5, x:1000, y :-1000, rotate: 180},"-=.25")
    tl.from("#shape6",{duration: .5, x:1000, y :0, rotate: 180},"-=.25")
    tl.from("#shape9",{duration: .5, x:1000, y :1000, rotate: 180},"-=.25")
    tl.from("#shape8",{duration: .5, x:0, y :1000, rotate: 180},"-=.25")
    tl.from("#shape7",{duration: .5, x:-1000, y :1000, rotate: 180},"-=.25")
    tl.from("#shape5",{duration: .5, x:-1000, y :-500, rotate: 180},"-=.25")
    tl.from("#shape4",{duration: .5, x:-1000, y :-1000, rotate: 180},"-=.25")
   
    tl.to("#Shapes",{duration: .5, rotate: 360, scale: 0, transformOrigin: "center"},"-=.25")

    return tl;
}

function Plants(){

    var tl = gsap.timeline();
    tl.from("#Plants",{alpha:0, scale:0, transformOrigin: "center"})
    tl.to("#Plants",{duration:.5, scale:2, transformOrigin: "center"})

    tl.from("#oak", 1,{alpha: 0, morphSVG: "#fern"})
    tl.from("#fern", 1,{alpha: 0, morphSVG: "#skinnyFern"})
    tl.from("#skinnyFern", 1,{alpha: 0, morphSVG: "plant1"})
    tl.from("#plant1", 1,{alpha: 0, morphSVG: "#plant2"})
    tl.from("#plant2", 1,{alpha: 0, morphSVG: "#flower"})


    return tl;
}




GSDevTools.create();

var mainTL = gsap.timeline();
mainTL.add(Shapes())
mainTL.add(Plants())



// var tl = gsap.timeline();
// tl.from("#shape1",{duration: .25, stagger: 0.25, rotate: 90, transformOrigin: "center center", x:150})
// tl.from("#shape2",{duration: .25, stagger: 0.25, rotate: -90, transformOrigin: "center center", y:150})
// tl.from("#shape3",{duration: .25, stagger: 0.25, rotate: 180, transformOrigin: "center center", y:250})
// tl.from("#shape4",{duration: .25, rotate: 90, transformOrigin: "center center", y:200})
// tl.from("#shape5",{duration: .25, rotate: 90, transformOrigin: "center center", x:200})
// tl.from("#shape7",{duration: .25, rotate: -90, transformOrigin: "center center", x:300})