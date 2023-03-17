import { DateTime } from "luxon";
declare module "luxon/src/datetime" {
    interface DateTime {
        format(format: string): string;
    }
}
declare global {
    interface Window {
        timezone: string;
    }
}
export { DateTime };
export default class QDateTime {
    static locationTime(): DateTime;
    static parse(value: string): DateTime;
    static parseTimestamp(value: number): DateTime;
}
//# sourceMappingURL=QDateTime.d.ts.map