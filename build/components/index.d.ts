export interface IFRunnerParams {
    iteration?: number;
    isLastTime?: boolean;
}
export type TPRunnerFallback = (params?: IFRunnerParams) => any | Promise<any>;
export interface IFRunnerProps {
    fallback?: TPRunnerFallback;
    delay?: number;
    maxIteration?: number;
}
/**
 * Runner class manages a looping mechanism with customizable delay and iteration limits.
 * It executes a callback function at each iteration and can be started, stopped, or restarted.
 */
export declare class Runner {
    private _fallback?;
    private _delay;
    private _maxLoop?;
    private _id;
    private _counter;
    private _starting?;
    constructor(props?: IFRunnerProps);
    __hTikTok(): Promise<void>;
    start(): void;
    stop(): void;
    restart(): void;
    startAfter(): void;
    startAfterTimeout(time: number): void;
    isRunning(): boolean;
    getTimes(): number;
    setMaxIteration(maxIteration: number): void;
    setDelay(delay: number): void;
    setCallback(callback: TPRunnerFallback): void;
}
