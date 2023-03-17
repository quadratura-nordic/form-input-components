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

DateTime.prototype.format = function (format: string) {
  return this.toFormat(format);
};

export { DateTime };

export default class QDateTime {
  static locationTime() {
    return DateTime.local().setZone(window.timezone);
  }
  static parse(value: string) {
    return DateTime.fromISO(value).setZone(window.timezone);
  }
  static parseTimestamp(value: number) {
    return DateTime.fromMillis(+value).setZone(window.timezone);
  }
}
