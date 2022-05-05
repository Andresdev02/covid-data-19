import { useEffect, useState } from "react";
import { DataChart, DataConfirmedProps } from "../../utils/types";
import ChartConfirmed from "./ChartConfirmed";
import moment from "moment";

const Statistics = () => {
  const apiUrl = import.meta.env.VITE_CONFIRMED_API_URL;
  const [data, setData] = useState<DataChart[]>([]);
  useEffect(() => {
    getConfirmedCases();
  }, []);

  const getConfirmedCases = () => {
    fetch(`${apiUrl}`)
      .then((response) => response.json())
      .then(async (data) => {
        if (data.length > 0) {
          const newData: DataChart[] = [];
          await data.forEach(({ Cases, Date }: DataConfirmedProps) => {
            if (moment(Date).format("D") === "1") {
              newData.push({
                name: moment(Date).format("MM-YY"),
                Confirmed: Cases,
              });
            }
          });
          console.log(newData);

          setData(newData);
        }
      });
  };

  return (
    <section className="flex flex-col justify-between mb-3">
      <h3 className="covid-title">Statistics</h3>
      <ChartConfirmed data={data} />
    </section>
  );
};

export default Statistics;
