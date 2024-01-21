"use client";
import React, { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ko";

const Calendar: React.FC = () => {
  dayjs.locale("ko");

  const [currentMonth, setCurrentMonth] = useState<Dayjs>(dayjs());

  const goToPreviousMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, "month"));
  };

  const goToNextMonth = () => {
    setCurrentMonth(currentMonth.add(1, "month"));
  };

  const handleDateClick = (date: Dayjs) => {
    console.log(date.format("YYYY-MM-DD"));
    setCurrentMonth(date);
  };

  const startOfMonth = currentMonth.startOf("month"); //현재 달의 첫 날
  const endOfMonth = currentMonth.endOf("month"); //현재 달의 마지막 날
  const startOfWeek = startOfMonth.startOf("week"); //첫주의 일요일
  const endOfWeek = endOfMonth.endOf("week"); //마지막 주의 토요일

  const calendar: Dayjs[][] = [];

  let currentDay = startOfWeek;
  let weekCount = 0;

  while (weekCount < 6) {
    const week: Dayjs[] = [];

    for (let i = 0; i < 7; i++) {
      week.push(currentDay);
      currentDay = currentDay.add(1, "day");
    }

    calendar.push(week);
    weekCount++;
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <button onClick={goToPreviousMonth}>이전 달</button>
        <span>{currentMonth.format("YYYY년 MM월")}</span>
        <button onClick={goToNextMonth}>다음 달</button>
      </div>
      <table
        style={{ width: "100%", height: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            {["일", "월", "화", "수", "목", "금", "토"].map((day, index) => (
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "center",
                }}
                key={index}
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendar.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((date, dateIndex) => (
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                  key={dateIndex}
                  onClick={() => handleDateClick(date)}
                  className={
                    date.isSame(currentMonth, "month") ? "" : "other-month"
                  }
                >
                  {date.format("D")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
