import { Dayjs } from "dayjs";
export interface DayCell {
  date: Dayjs;
  currentMonth: boolean;
}

export function getAllDays(date: Dayjs) {
  // 开始时间
  const startDate = date.startOf("month");
  const day = startDate.day();

  // [[{date,currentMonth}...*7{date,currentMonth}]...*6[date,currentMonth...*7{date,currentMonth}]]
  const daysInfo: Array<DayCell> = new Array(6 * 7);

  for (let i = 0; i < day; i++) {
    // 上月的日期
    daysInfo[i] = {
      date: startDate.subtract(day - i, "day"),
      currentMonth: false,
    };
  }

  for (let i = day; i < daysInfo.length; i++) {
    // 当月和下月的日期
    const calcDate = startDate.add(i - day, "day");

    daysInfo[i] = {
      date: calcDate,
      currentMonth: calcDate.month() === date.month(),
    };
  }

  return daysInfo;
}
export const weekList = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
]
