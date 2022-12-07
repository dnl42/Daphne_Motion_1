import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(SplitText);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");



function Snowflake(){

    var tl = gsap.timeline();
    tl.from("#snowflake", {duration:.5, scale:0, rotate:720, transformOrigin:"center"})

    
    return tl;
}


function Grow(){

    var tl = gsap.timeline();
    tl.to("#shape3", {duration: .75, x:200, y: 200})
    tl.to("#rectangle3", {scaleY: "5", transformOrigin:"bottom", duration: .75, x:200, y: 200}, "-=0.75")

    tl.to("#shape4", {duration: .75, y:300}, "-=0.75")
    tl.to("#rectangle4", {scaleY: "5", transformOrigin:"bottom", duration: .75, y:300}, "-=0.75")

    tl.to("#shape5", {duration: .75, x:-220, y:220}, "-=0.75")
    tl.to("#rectangle5", {scaleY: "5", transformOrigin:"bottom", duration: .75, x:-220, y:220}, "-=0.75")

    tl.to("#shape6", {duration: .75, x:-300, y:0}, "-=0.75")
    tl.to("#rectangle6", {scaleY: "5", transformOrigin:"bottom", duration: .75, x:-300, y:0}, "-=0.75")

    tl.to("#shape7", {duration: .75, x:-200, y:-200}, "-=0.75")
    tl.to("#rectangle7", {scaleY: "5", transformOrigin:"bottom", duration: .75, x:-200, y:-200}, "-=0.75")

    tl.to("#shape8", {duration: .75, x:0, y:-300}, "-=0.75")
    tl.to("#rectangle8", {scaleY: "5", transformOrigin:"bottom", duration: .75, x:0, y:-300}, "-=0.75")

    tl.to("#shape1", {duration: .75, x:200, y:-200}, "-=0.75")
    tl.to("#rectangle1", {scaleY: "5", transformOrigin:"bottom", duration: .75, x:200, y:-200}, "-=0.75")

    tl.to("#shape2", {duration: .75, x:300, y:0}, "-=0.75")
    tl.to("#rectangle2", {scaleY: "5", transformOrigin:"bottom", duration: .75, x:300, y:0}, "-=0.75")

    tl.from("#clip",{duration: .5, scale: 0}, "-=0.75")
    tl.to("#clip",{duration: .5, scale: 9, transformOrigin: "center"}, "-=0.50")

    
  
    
    tl.to(".rectangles", {duration: 0, opacity: 0})
    tl.to("#clip", {duration: 0, opacity: 0})
   
    tl.to("#snowflake",{duration: .5, rotate:-180, transformOrigin: "center"},"spin", "-=3")

    tl.to("#shape4",{duration: 0.25, scaleX:"3", transformOrigin:"center"}, "-=0.5")
    tl.to("#shape6",{duration:0.25, scaleY:"3", transformOrigin:"center"},"-=0.5")
    tl.to("#shape8",{duration: 0.25, scaleX:"3", transformOrigin:"center"},"-=0.5")
    tl.to("#shape2",{duration:0.25, scaleY:"3", transformOrigin:"center"},"-=0.5")

    tl.to("#shape3",{duration:0.25, transformOrigin:"center"},"-=0.25")
    tl.to("#shape5",{duration:0.25, transformOrigin:"center"},"-=0.25")
    tl.to("#shape7",{duration:0.25, transformOrigin:"center"},"-=0.25")
    tl.to("#shape1",{duration:0.25, transformOrigin:"center"},"-=0.25")
    
    tl.to(".domes",{duration:.2, scaleX:1, scaleY:1})
    return tl;
}


function Shapes(){

    var tl = gsap.timeline();
    tl.to(".domes",{duration:1, rotate:180, transformOrigin:"center"})
    return tl;
}

function Droon(){

    var tl = gsap.timeline();
    tl.from(".droon",{alpha: 0, yPercent: 130, stagger: 0.1, duration:1, transformOrigin: "bottom", ease:'back.out'})

   
    tl.to("#rectangle6",{opacity:100, scaleY: 7, duration:0})
    tl.to("#group6",{duration:0.5, x:1200, y:0})
    tl.to(".droon",{visibility:"hidden"},"-=.45")


    tl.to("#rectangle7",{opacity:100, duration:0},"-=.25" )
    tl.to("#group7",{duration:0.5, x:1200, y:1200},"-=.25")
    
    tl.to("#rectangle8",{opacity:100, scaleY: 7, duration:0},"-=.25")
    tl.to("#group8",{duration:0.5, x:0, y:1200},"-=.25")

    tl.to("#rectangle1",{opacity:100, duration:0},"-=.25")
    tl.to("#group1",{duration:0.5, x:-1200, y:1200},"-=.25")

    tl.to("#rectangle2",{opacity:100, scaleY: 7, duration:0},"-=.25")
    tl.to("#group2",{duration:0.5, x:-1200, y:0},"-=.25")

    tl.to("#rectangle3",{opacity:100, duration:0},"-=.25")
    tl.to("#group3",{duration:0.5, x:-1200, y:-1200},"-=.25")

    tl.to("#rectangle4",{opacity:100, scaleY: 7, duration:0},"-=.25")
    tl.to("#group4",{duration:0.5, x:0, y:-1200},"-=.25")

    tl.to("#rectangle5",{opacity:100, duration:0},"-=.25")
    tl.to("#group5",{duration:0.5, x:1200, y:-1200},"-=.25")

    

    return tl;
}




GSDevTools.create();

var mainTL = gsap.timeline();
mainTL.add(Snowflake());
mainTL.add(Grow());
mainTL.add(Shapes());
mainTL.add(Droon());

