import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);
gsap.registerPlugin(MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");



function Snowflake(){

    var tl = gsap.timeline();
    tl.from("#snowflake", {duration:1, scale:0, rotate:720, transformOrigin:"center"})

    
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

    tl.from("#clip",{duration: .75, scale: 0}, "-=0.75")
    tl.to("#clip",{duration: .75, scale: 9, transformOrigin: "center"}, "-=0.50")

    return tl;
}


function Wide(){

    var tl = gsap.timeline();
    tl.to(".rectangles", {duration: 0, opacity: 0})
    tl.to("#shape4",{duration: 0.25, scaleX:"2", transformOrigin:"center"})
    tl.to("#shape6",{duration:0.25, scaleY:"2", transformOrigin:"center"},"-=0.25")
    tl.to("#shape8",{duration: 0.25, scaleX:"2", transformOrigin:"center"},"-=0.25")
    tl.to("#shape2",{duration:0.25, scaleY:"2", transformOrigin:"center"},"-=0.25")

    return tl;
}



// function Shapes(){

//     var tl = gsap.timeline();
//     tl.to("#shape1",{duration:1, x:250, y:100, rotate:-180, transformOrigin:"center"},"spin")
//     tl.tp("#shape2",{duration:1, x:90, y:240, rotate:-180, transformOrigin:"center"},"spin")
//     tl.to("#shape3",{duration:1, x:-100, y:240, rotate:-180, transformOrigin:"center"},"spin")
//     tl.to("#shape4",{duration:1, x:-250, y:100, rotate:-180, transformOrigin:"center"},"spin")
//     tl.to("#shape5",{duration:1, x:-250, y:-100, rotate:-180, transformOrigin:"center"},"spin")
//     tl.to("#shape6",{duration:1, x:-100, y:-260, rotate:-180, transformOrigin:"center"},"spin")
//     tl.to("#shape7",{duration:1, x:90, y:-250, rotate:-180, transformOrigin:"center"},"spin")
//     tl.to("#shape8",{duration:1, x:250, y:-100, rotate:-180, transformOrigin:"center"},"spin")
   
//     return tl;
// }




GSDevTools.create();

var mainTL = gsap.timeline();
mainTL.add(Snowflake());
mainTL.add(Grow());
mainTL.add(Wide());

// mainTL.add(Shapes());
