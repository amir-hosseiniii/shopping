import { IEventLogic } from "../../..";
declare const useEvents: (date: string) => {
    events: IEventLogic[] | undefined;
};
export default useEvents;
