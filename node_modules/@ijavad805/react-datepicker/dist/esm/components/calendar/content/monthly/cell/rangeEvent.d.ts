import React from "react";
import { IEventLogic } from "../../..";
import moment from "moment";
interface IProps {
    index: number;
    item: IEventLogic;
    date: moment.MomentInput;
    cellIndexInWeek: number;
    cellWith: number;
    key: any;
    setParentHeight?: any;
}
declare const RangeEvent: React.FC<IProps>;
export default RangeEvent;
