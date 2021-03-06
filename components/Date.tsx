import { format, parseISO } from "date-fns";

export function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);

  return (
    <time className="text-sm text-gray-400" dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
    </time>
  );
}
