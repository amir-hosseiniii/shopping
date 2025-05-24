import moment, { Moment } from "moment";
declare const useDateTools: (customDate?: moment.Moment) => {
    getMonth: (month?: number, addMonth?: boolean) => {
        countDay: number;
        name: string;
        fullName: string;
        date: moment.Moment;
    };
    maxMonth: number;
    maxWeak: number;
    getYear: (date_?: string) => string;
    getMonthStartWith: () => number;
    date: moment.Moment;
    value: moment.Moment | undefined;
    getMonths: () => any;
    setValue: Function | undefined;
    moment: any;
    getWeakDayName: (minName?: boolean) => string[];
};
export default useDateTools;
