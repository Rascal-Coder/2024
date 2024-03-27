import { Dayjs } from "dayjs";
import { CalendarProps } from ".";
import LocaleContext from "./LocaleContext";
import { useContext } from "react";
import cs from "classnames";
import { useLocale } from "./hooks";
import { weekList, getAllDays, DayCell } from "./shared";
interface MonthCalendarProps extends CalendarProps {
  selectHandler?: (date: Dayjs) => void;
  curMonth: Dayjs;
}

function MonthCalendar(props: MonthCalendarProps) {
  const localeContext = useContext(LocaleContext);
  const { currentLocale: CalendarContext } = useLocale(localeContext.locale);
  const { value, curMonth, dateRender, dateInnerContent, selectHandler } =
    props;

  const allDays = getAllDays(curMonth);

  function renderDays(days: Array<DayCell>) {
    const rows = [];
    for (let i = 0; i < 6; i++) {
      const row = [];
      for (let j = 0; j < 7; j++) {
        const item = days[i * 7 + j];
        row[j] = (
          <div
            key={`${i}-${j}`}
            className={
              "calendar-month-body-cell " +
              (item.currentMonth ? "calendar-month-body-cell-current" : "")
            }
            onClick={() => selectHandler?.(item.date)}
          >
            {dateRender ? (
              dateRender(item.date)
            ) : (
              <div className="calendar-month-body-cell-date">
                <div
                  className={cs(
                    "calendar-month-body-cell-date-value",
                    value.format("YYYY-MM-DD") ===
                      item.date.format("YYYY-MM-DD")
                      ? "calendar-month-body-cell-date-selected"
                      : ""
                  )}
                >
                  {item.date.date()}
                </div>
                <div className="calendar-month-cell-body-date-content">
                  {dateInnerContent?.(item.date)}
                </div>
              </div>
            )}
          </div>
        );
      }
      rows.push(row);
    }
    return rows.map((row, index) => {
      return (
        <div key={index} className="calendar-month-body-row">
          {row}
        </div>
      );
    });
  }

  return (
    <div className="calendar-month">
      <div className="calendar-month-week-list">
        {weekList.map((week) => (
          <div className="calendar-month-week-list-item" key={week}>
            {CalendarContext.week[week]}
          </div>
        ))}
      </div>
      <div className="calendar-month-body">{renderDays(allDays)}</div>
    </div>
  );
}

export default MonthCalendar;
