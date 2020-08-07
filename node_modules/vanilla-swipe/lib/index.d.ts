import { State, ConstructorProps } from './types';
export default class VanillaSwipe {
    state: State;
    props: ConstructorProps;
    constructor(props: ConstructorProps);
    init(): void;
    update(props: ConstructorProps): void;
    destroy(): void;
    setupTouchListeners(): void;
    cleanupTouchListeners(): void;
    setupMouseListeners(): void;
    cleanupMouseListeners(): void;
    getPosition(e: TouchEvent | MouseEvent): {
        deltaX: number;
        deltaY: number;
        absX: number;
        absY: number;
        duration: number;
        velocity: number;
    };
    handleSwipeStart(e: any): void;
    handleSwipeMove(e: any): void;
    handleSwipeEnd(e: any): void;
    handleMouseDown(e: MouseEvent): void;
    handleMouseMove(e: MouseEvent): void;
    handleMouseUp(e: MouseEvent): void;
    handleMouseLeave(): void;
}
