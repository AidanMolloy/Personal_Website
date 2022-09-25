import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "MMM yyyy")}</time>;
}

const differenceInMonths = (a, b) =>
  Math.floor((a.getTime() - b.getTime()) / (1000 * 60 * 60 * 24 * 30.4167));

export function DateBetween({ dateFrom, dateTo }) {
  const dateF = parseISO(dateFrom);
  const dateT = parseISO(dateTo);
  let months = differenceInMonths(dateT, dateF);
  let str = "";
  const years = Math.floor(months / 12);
  if (years == 1) {
    str += years + " yr ";
  } else if (years > 1) {
    str += years + " yrs ";
  }
  months -= years * 12;
  if (months == 1) {
    str += months + " mo";
  } else {
    str += months + " mos";
  }
  return str;
}
