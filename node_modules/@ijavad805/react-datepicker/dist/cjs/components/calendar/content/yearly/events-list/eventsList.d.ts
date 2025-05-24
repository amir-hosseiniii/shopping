import { Moment } from "moment";
import React from "react";
import "./style.scss";
interface IProps {
    date?: Moment;
    onClose: () => void;
    visible: boolean;
}
export declare const EventsList: React.FC<IProps>;
export {};
