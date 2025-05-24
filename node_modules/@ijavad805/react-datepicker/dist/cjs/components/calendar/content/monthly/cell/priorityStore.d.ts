interface IEvent {
    id: number;
    priority: number;
}
export declare class priorityStore {
    static store: IEvent[];
    add(event: IEvent): void;
    clear(): void;
}
export declare const priorityStoreInit: priorityStore;
export {};
