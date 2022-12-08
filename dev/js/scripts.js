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
    tl.to("#Plants",{scale:2, transformOrigin: "center"})

    tl.fromTo("#oak", {alpha: 0, duration:.25}, {alpha: 1}, "-=1")
    tl.fromTo("#fern", {alpha: 0, duration:.25}, {alpha: 1})
    tl.to("#oak", {duration: .5, alpha: 0, morphSVG: "#fern"}, "-=.5")

    tl.fromTo("#plant2", {alpha: 0, duration:.25}, {alpha: 1})
    tl.to("#fern", {duration: .5, alpha: 0, morphSVG: "#plant2"}, "-=.5")

    tl.fromTo("#plant1", {alpha: 0, duration:.25}, {alpha: 1})
    tl.to("#plant2", {duration: .5, alpha: 0, morphSVG: "#plant1"}, "-=.5")
 
    tl.fromTo("#skinnyFern", {alpha: 0, duration:.25}, {alpha: 1})
    tl.to("#plant1", {duration: .5, alpha: 0, morphSVG: "#skinnyFern"}, "-=.5")

    tl.fromTo("#flower", {alpha: 0, duration:.25}, {alpha: 1})
    tl.to("#skinnyFern", {duration: .5, alpha: 0, morphSVG: "#flower"}, "-=.5")




    return tl;
}


function Name(){

    var tl = gsap.timeline();
    tl.from("#B", {duration:.5, drawSVG:"0% 0%"},"-=.5")
    tl.from("#A", {duration:.5, drawSVG:"0% 0%"},"-=.5")
    tl.from("#R", {duration:.5, drawSVG:"0% 0%"},"-=.5")
    tl.from("#T", {duration:.5, drawSVG:"0% 0%"},"-=.5")
    tl.from("#R2", {duration:.5, drawSVG:"0% 0%"},"-=.5")
    tl.from("#A2", {duration:.5, drawSVG:"0% 0%"},"-=.5")
    tl.from("#M", {duration:.5, drawSVG:"0% 0%"},"-=.5")
    tl.from("#apostrophe", {duration:.5, drawSVG:"0% 0%"},"-=.5")
    tl.from("#S", {duration:.5, drawSVG:"0% 0%"},"-=.5")
    tl.from("#G", {duration:.5, drawSVG:"0% 0%"},"-=.5")
    tl.from("#A3", {duration:.5, drawSVG:"0% 0%"},"-=.5")
    tl.from("#R3", {duration:.5, drawSVG:"0% 0%"},"-=.5")
    tl.from("#D", {duration:.5, drawSVG:"0% 0%"},"-=.5")
    tl.from("#E", {duration:.5, drawSVG:"0% 0%"},"-=.5")
    tl.from("#N", {duration:.5, drawSVG:"0% 0%"},"-=.5")

    tl.fromTo("#flower", {alpha:1}, {alpha:0},"-=.75")

    tl.to("#B", {fill:"#859272", duration:.25})
    tl.to("#A", {fill:"#859272", duration:.25},"-=.2")
    tl.to("#R", {fill:"#859272", duration:.25},"-=.2")
    tl.to("#T", {fill:"#859272", duration:.25},"-=.2")
    tl.to("#R2", {fill:"#859272", duration:.25},"-=.2")
    tl.to("#A2", {fill:"#859272", duration:.25},"-=.2")
    tl.to("#M", {fill:"#859272", duration:.25},"-=.2")
    tl.to("#apostrophe", {fill:"#859272", duration:.25},"-=.2")
    tl.to("#S", {fill:"#859272", duration:.25},"-=.2")
    tl.to("#G", {fill:"#859272", duration:.25},"-=.2")
    tl.to("#A3", {fill:"#859272", duration:.25},"-=.2")
    tl.to("#R3", {fill:"#859272", duration:.25},"-=.2")
    tl.to("#D", {fill:"#859272", duration:.25},"-=.2")
    tl.to("#E", {fill:"#859272", duration:.25},"-=.2")
    tl.to("#N", {fill:"#859272", duration:.25},"-=.2")

    tl.fromTo("#BMask", {alpha:0, duration: .5}, {alpha:1}, "-=.5")
    tl.to("#BMask", {duration: .5, scale:1.5, transformOrigin:"center"},"-=.5")
    tl.to("#WORD", {duration: .5, scale:1.5, transformOrigin:"center", y:30 },"-=.5")



    return tl;
}





GSDevTools.create();

var mainTL = gsap.timeline();
mainTL.add(Shapes())
mainTL.add(Plants())
mainTL.add(Name())

