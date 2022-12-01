import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);
gsap.registerPlugin(MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

function Shapes(){

    var tl = gsap.timeline();
    tl.to("#shape1",{duration: .5, rotate: 90, transformOrigin: "center center", x:150})
    tl.to("#shape2",{duration: .5, rotate: -90, transformOrigin: "center center", y:150})
    tl.to("#shape3",{duration: .5, rotate: 180, transformOrigin: "center center", y:250})
    tl.to("#shape4",{duration: .5, rotate: 90, transformOrigin: "center center", y:200})

    return tl;
}






GSDevTools.create();

var mainTL = gsap.timeline();
mainTL.add(Shapes())
