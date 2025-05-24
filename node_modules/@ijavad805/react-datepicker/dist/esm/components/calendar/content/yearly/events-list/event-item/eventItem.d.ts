import React from "react";
import { IEvent } from "../../../..";
import "./style.scss";
interface IProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    id: number;
    event: IEvent;
}
export declare const EventItem: React.FC<IProps>;
export {};
