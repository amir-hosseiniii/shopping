import React from "react";
import "./style.scss";
export interface IYearOption {
    hideEventsList?: boolean;
    onYearChange?: (start: string, end: string) => void;
}
interface IProps {
    options?: IYearOption;
    extra?: React.ReactNode;
}
export declare const YearlyCalendar: React.FC<IProps>;
export {};
