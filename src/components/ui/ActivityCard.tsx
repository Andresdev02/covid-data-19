import { BellIcon } from "@heroicons/react/solid";
import CountUp from "react-countup";

function ActivityCard({
  cases,
  title,
  color = "#0AA1DD",
}: {
  cases: number;
  title: string;
  percent?: number;
  color?: string;
}) {
  return (
    <div
      className="rounded-2xl min--[300px]  flex  flex-col p-5"
      style={{ backgroundColor: color }}
    >
      <button className="rounded-xl opacity-75 bg-white w-10 h-10 flex items-center justify-center shadow-sm relative">
        <BellIcon className="w-5" style={{ color: color }} />
      </button>
      <section className="flex justify-between items-end text-white">
        <div>
          <p className="text-lg mt-2  font-semibold">
            <CountUp
              end={cases}
              duration={1.5}
              formattingFn={(value) =>
                value.toLocaleString().replace(/,/g, ".")
              }
            />
          </p>
          <p>{title}</p>
        </div>
      </section>
    </div>
  );
}

export default ActivityCard;
