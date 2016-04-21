'use strict';

export class SVGArc {
    static convertToRadians(angle: number) {
        return angle > 0 ? angle / 180 * Math.PI : 0;
    }
    
    constructor({canvasSize, radius, angle}) {
        this.canvasSize = Number(canvasSize);
        this.radius = Number(radius);
        this.angle = Number(angle);
        this.center = this.canvasSize / 2;
    }
    
    render() {
        let startX = this.getStartX();
        let startY = this.getStartY();
        let endX = Number(this.getEndX().toFixed(2));
        let endY = Number(this.getEndY().toFixed(2));
        let largeArcFlag = Number(this.isReflexAngle());

        return `
                <svg
                    class="arc"
                    width="${this.canvasSize}"
                    height="${this.canvasSize}"
                    viewBox="0 0 ${this.canvasSize} ${this.canvasSize}"
                    preserveAspectRatio="xMidYMid meet">
        
                    <path d="
                        M${startX} ${startY}
                        A${this.radius} ${this.radius} 0 ${largeArcFlag} 0 ${endX} ${endY}
                    "></path>
                </svg>
            `;
    }

    private canvasSize: number;
    private radius: number;
    private angle: number;
    private center: number;

    private getStartX() {
        return this.center + this.radius;
    }

    private getEndX() {
        let angleInRadians = SVGArc.convertToRadians(this.angle);

        return this.center + this.radius * Math.cos(angleInRadians);
    }

    private getStartY() {
        return this.center;
    }

    private getEndY() {
        let angleInRadians = SVGArc.convertToRadians(360 - this.angle);

        return this.center + this.radius * Math.sin(angleInRadians);
    }

    private isReflexAngle() {
        return this.angle > 180;
    }
}
