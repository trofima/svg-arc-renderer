export declare class SVGArc {
    static convertToRadians(angle: number): number;
    constructor({canvasSize, radius, angle}: {
        canvasSize: any;
        radius: any;
        angle: any;
    });
    render(): string;
    private canvasSize;
    private radius;
    private angle;
    private center;
    private getStartX();
    private getEndX();
    private getStartY();
    private getEndY();
    private isReflexAngle();
}
