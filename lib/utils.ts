import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to format date as YYYY-MM-DD
export function formatDate(date: Date, format: string = "YYYY-MM-DD") {
  const YYYY = date.getFullYear();
  const MM = String(date.getMonth() + 1).padStart(2, "0");
  const DD = String(date.getDate()).padStart(2, "0");
  switch (format) {
    case "YYYY-MM-DD":
      return `${YYYY}-${MM}-${DD}`;
    case "DD/MM":
      return `${DD}/${MM}`;
    default:
      return `${YYYY}-${MM}-${DD}`;
  }
}

export function daysOffsetToDateString(
  daysOffset: number,
  format: string = "DD/MM"
) {
  const date = new Date();
  date.setDate(date.getDate() + daysOffset);
  return formatDate(date, format);
}

export function getDateQuery(daysOffset: number) {
  if (daysOffset === 0) {
    return "";
  }
  const dateFrom = new Date();
  dateFrom.setDate(dateFrom.getDate() + daysOffset);

  const dateTo = new Date(dateFrom);
  dateTo.setDate(dateTo.getDate() + 1);

  const formatedDates = {
    dateFrom: formatDate(dateFrom),
    dateTo: formatDate(dateTo),
  };
  
  return `dateFrom=${formatedDates.dateFrom}&dateTo=${formatedDates.dateTo}`;
}
