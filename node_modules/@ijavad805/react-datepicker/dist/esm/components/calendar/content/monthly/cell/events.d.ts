import React from "react";
import { IEventLogic } from "../../..";
interface IProps {
    date: moment.MomentInput;
    cellIndexInWeek: number;
    cellWith: number;
    events?: IEventLogic[];
}
declare const Events: React.FC<IProps>;
export default Events;
