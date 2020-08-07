export declare function calculatePosition(prevPos: prevPosition, nextPos: nextPosition): Value;
declare type Value = {
    deltaX: number;
    deltaY: number;
    absX: number;
    absY: number;
    duration: number;
    velocity: number;
};
declare type prevPosition = {
    x: number;
    y: number;
    start: number;
};
declare type nextPosition = {
    x: number;
    y: number;
};
export {};
