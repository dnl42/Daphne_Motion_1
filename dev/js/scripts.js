import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);
gsap.registerPlugin(MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

function Shapes(){

    var tl = gsap.timeline();
    tl.from("#shape1",{duration: .25, stagger: 0.25, rotate: 90, transformOrigin: "center center", x:150})
    tl.from("#shape2",{duration: .25, stagger: 0.25, rotate: -90, transformOrigin: "center center", y:150})
    tl.from("#shape3",{duration: .25, stagger: 0.25, rotate: 180, transformOrigin: "center center", y:250})
    tl.from("#shape4",{duration: .25, rotate: 90, transformOrigin: "center center", y:200})
    tl.from("#shape5",{duration: .25, rotate: 90, transformOrigin: "center center", x:200})
    tl.from("#shape7",{duration: .25, rotate: -90, transformOrigin: "center center", x:300})

    return tl;
}






GSDevTools.create();

var mainTL = gsap.timeline();
mainTL.add(Shapes())
