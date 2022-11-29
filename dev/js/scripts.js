import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);
gsap.registerPlugin(MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");


GSDevTools.create();

var mainTL = gsap.timeline();
