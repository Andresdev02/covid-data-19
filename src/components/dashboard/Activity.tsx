import { useEffect, useState } from "react";
import { DataCasesProps } from "../../utils/types";
import { ActivityCard } from "../ui";
import moment from "moment";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

const Activity = () => {
  const apiUrl = import.meta.env.VITE_CASES_API_URL;
  const types = ["Most Recent", "Last Week", "Last Month", "Last Year"];
  const todayFormated = moment().startOf("day").format("DD-MMMM-YYYY");
  const [activeType, setActiveType] = useState<string>(types[0]);
  const [daysAgo, setDaysAgo] = useState<number>(2);
  const [confirmed, setConfirmed] = useState<number>(0);
  const [deaths, setDeaths] = useState<number>(0);
  const [recovered, setRecovered] = useState<number>(0);
  const [active, setActive] = useState<number>(0);
  const [activeDate, setActiveDate] = useState<string>(todayFormated);

  useEffect(() => {
    getRecentActivity();
  }, [daysAgo]);

  const getRecentActivity = () => {
    const startDate = moment().startOf("day").subtract(daysAgo, "days");
    const startDateFormatted = startDate.toISOString();
    const endDate = moment(startDateFormatted).add(1, "days");
    const endDateFormatted = endDate.toISOString();
    setActiveDate(startDate.format("DD-MMMM-YYYY"));
    fetch(`${apiUrl}?from=${startDateFormatted}&to=${endDateFormatted}`)
      .then((response) => response.json())
      .then(async (data) => {
        if (data.length > 0) {
          await data.forEach(
            ({ Confirmed, Deaths, Recovered, Active }: DataCasesProps) => {
              setConfirmed(Confirmed);
              setDeaths(Deaths);
              setRecovered(Recovered);
              setActive(Active);
            }
          );
        }
      });
  };

  const handleTypeChanged = (event: SelectChangeEvent) => {
    setActiveType(event.target.value);
    switch (event.target.value) {
      case "Most Recent":
        setDaysAgo(2);
        break;
      case "Last Week":
        setDaysAgo(7);
        break;
      case "Last Month":
        setDaysAgo(31);
        break;
      case "Last Year":
        setDaysAgo(356);
        break;
      default:
        setDaysAgo(2);
        break;
    }
  };

  return (
    <section className="">
      <div className="flex justify-between mb-3">
        <div className="flex flex-col">
          <h3 className="covid-title">Recent Activity</h3>
          <p>{activeDate}</p>
        </div>
        <Select
          value={activeType}
          onChange={(event: SelectChangeEvent) => handleTypeChanged(event)}
        >
          {types.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>

      <div className="flex flex-col space-y-4">
        <section className="grid lg:grid-cols-4 lg:gap-10 gap-5 grid-cols-2">
          <ActivityCard cases={confirmed} title="Confirmed" color="#79DAE8" />
          <ActivityCard cases={deaths} title="Deaths" color="#E23E57" />
          <ActivityCard cases={recovered} title="Recovered" color="#bcbcbc" />
          <ActivityCard cases={active} title="Active" />
        </section>
      </div>
    </section>
  );
};

export default Activity;
