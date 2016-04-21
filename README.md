SVG Arc renderer
================

Simple SVG arc renderer. 
It returns string representing an svg arc.

All you need is in [dist](/dist/) folder. The class uses commonjs pattern for module exporting.
Typescript declarations can be found [here](/dist/SVGArc.d.ts).
 
Example
-------

var arcContainer = document.createElement('div');

`arcContainer.innerHTML = new SVGArc({
    canvasSize: 300,
    radius: 100,
    angle: 270
}).render();`