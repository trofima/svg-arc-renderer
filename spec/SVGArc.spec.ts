'use strict';

import {SVGArc} from './../src/SVGArc'

describe('Class SVGArc', function() {
    beforeEach(function() {
        this.renderArc = ({canvasSize = 0, radius = 0, angle = 0}) => {
            return new SVGArc({
                canvasSize: canvasSize,
                radius: radius,
                angle: angle
            }).render();
        };

        this.expect = (svgArc) => {
            this.svgArc = svgArc;

            return {toHaveBeenSetWith: this.toHaveBeenSetWith};
        };

        this.toHaveBeenSetWith = ({
            height = 0,
            width = 0,
            radius = 0,
            startX = 0,
            startY = 0,
            endX = 0,
            endY = 0,
            largeArcFlag = 0
        }) => {
            expect(this.svgArc).toBe(`
                <svg
                    class="arc"
                    width="${width}"
                    height="${height}"
                    viewBox="0 0 ${width} ${height}"
                    preserveAspectRatio="xMidYMid meet">
        
                    <path d="
                        M${startX} ${startY}
                        A${radius} ${radius} 0 ${largeArcFlag} 0 ${endX} ${endY}
                    "></path>
                </svg>
            `);
        };
    });

    describe('render:', function() {
        it('should render an svg arc by given size, radius and angle', function() {
            this.expect(this.renderArc({canvasSize: 0, radius: 0, angle: 0}))
                .toHaveBeenSetWith({});

            this.expect(this.renderArc({canvasSize: 10, radius: 0, angle: 0}))
                .toHaveBeenSetWith({
                    height: 10,
                    width: 10,
                    startX: 5,
                    startY: 5,
                    endX: 5,
                    endY: 5
                });

            this.expect(this.renderArc({canvasSize: 10, radius: 5, angle: 0}))
                .toHaveBeenSetWith({
                    height: 10,
                    width: 10,
                    radius: 5,
                    startX: 10,
                    startY: 5,
                    endX: 10,
                    endY: 5
                });

            this.expect(this.renderArc({canvasSize: 10, radius: 5, angle: 90}))
                .toHaveBeenSetWith({
                    height: 10,
                    width: 10,
                    radius: 5,
                    startX: 10,
                    startY: 5,
                    endX: 5,
                    endY: 0
                });

            this.expect(this.renderArc({canvasSize: 10, radius: 5, angle: 180}))
                .toHaveBeenSetWith({
                    height: 10,
                    width: 10,
                    radius: 5,
                    startX: 10,
                    startY: 5,
                    endX: 0,
                    endY: 5
                });

            this.expect(this.renderArc({canvasSize: 10, radius: 5, angle: 270}))
                .toHaveBeenSetWith({
                    height: 10,
                    width: 10,
                    radius: 5,
                    startX: 10,
                    startY: 5,
                    endX: 5,
                    endY: 10,
                    largeArcFlag: 1
                });
        });
    });

    describe('convertToRadians:', function() {
        it('should convert angle from degrees to radians', function() {
            expect(SVGArc.convertToRadians(0)).toBe(0);
            expect(SVGArc.convertToRadians(45)).toBe(Math.PI / 4);
            expect(SVGArc.convertToRadians(90)).toBe(Math.PI / 2);
            expect(SVGArc.convertToRadians(180)).toBe(Math.PI);
            expect(SVGArc.convertToRadians(270)).toBe(1.5 * Math.PI);
            expect(SVGArc.convertToRadians(360)).toBe(2 * Math.PI);
        });
    });
});
