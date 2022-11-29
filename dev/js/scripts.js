import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);
gsap.registerPlugin(MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

function Shapes(){

    var tl = gsap.timeline();
    tl.from("#shape1",{duration:1, x:250, y:100, rotate:-180, transformOrigin:"center"},"spin")
    tl.from("#shape2",{duration:1, x:90, y:240, rotate:-180, transformOrigin:"center"},"spin")
    tl.from("#shape3",{duration:1, x:-100, y:240, rotate:-180, transformOrigin:"center"},"spin")
    tl.from("#shape4",{duration:1, x:-250, y:100, rotate:-180, transformOrigin:"center"},"spin")
    tl.from("#shape5",{duration:1, x:-250, y:-100, rotate:-180, transformOrigin:"center"},"spin")
    tl.from("#shape6",{duration:1, x:-100, y:-260, rotate:-180, transformOrigin:"center"},"spin")
    tl.from("#shape7",{duration:1, x:90, y:-250, rotate:-180, transformOrigin:"center"},"spin")
    tl.from("#shape8",{duration:1, x:250, y:-100, rotate:-180, transformOrigin:"center"},"spin")
    return tl;
}


function Droon(){
    var tl = gsap.timeline();
    // tl.to(".droon",{duration:1, scale: -1 })
    return tl;
}


function Rectangles(){

    var tl = gsap.timeline();
    // tl.to("#shape3",1, {morphSVG:"#rectangle3", transformOrgign:"center right"})
    // tl.set("#rectangles",{visibility: "hidden"})
    tl.to("#rectangle3",{autoAlpha:1, duration:1, x:-1200, y:0})
    tl.to("#rectangle4",{autoAlpha:1, duration:1, delay:-0.60, x: -1200, y:-1200})
    tl.to("#rectangle5",{autoAlpha:1, duration:1, delay:-0.60, x:0, y:-1200})
    tl.to("#rectangle6",{autoAlpha:1, duration:1, delay:-0.60, x:1200, y:-1200})
    tl.to("#rectangle7",{autoAlpha:1, duration:1, delay:-0.60, x:1200, y:0})
    tl.to("#rectangle8",{autoAlpha:1, duration:1, delay:-0.60, x:1200, y:1200})
    tl.to("#rectangle1",{autoAlpha:1, duration:1, delay:-0.60, x:0, y:1200})
    tl.to("#rectangle2",{autoAlpha:1, duration:1, delay:-0.60, x:-1200, y:1200})
    

    return tl;
}


GSDevTools.create();

var mainTL = gsap.timeline();
mainTL.add(Shapes())
mainTL.add(Droon())
mainTL.add(Rectangles())