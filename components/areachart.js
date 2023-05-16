import { useState } from "react";
import { data_sets } from "../util/util";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
export default function DateFilter() {
  const [data, setData] = useState(data_sets);
  const x = new Date(data[6]["Purchase Date"]).getFullYear();
  const [year, setYear] = useState(2019);
  //   console.log(
  //     data.filter((item) => new Date(item["Purchase Date"]).getMonth() + 1 === 1)
  //   );
  const options = {
    series: [
      {
        name: "Desktops",
        data: [
          data.filter(
            (date) =>
              new Date(date["Purchase Date"]).getMonth() + 1 == 1 &&
              new Date(date["Purchase Date"]).getFullYear() === year
          ).length,
          data.filter(
            (date) =>
              new Date(date["Purchase Date"]).getMonth() + 1 == 2 &&
              new Date(date["Purchase Date"]).getFullYear() === year
          ).length,
          data.filter(
            (date) =>
              new Date(date["Purchase Date"]).getMonth() + 1 == 3 &&
              new Date(date["Purchase Date"]).getFullYear() === year
          ).length,
          data.filter(
            (date) =>
              new Date(date["Purchase Date"]).getMonth() + 1 == 4 &&
              new Date(date["Purchase Date"]).getFullYear() === year
          ).length,
          data.filter(
            (date) =>
              new Date(date["Purchase Date"]).getMonth() + 1 == 5 &&
              new Date(date["Purchase Date"]).getFullYear() === year
          ).length,
          data.filter(
            (date) =>
              new Date(date["Purchase Date"]).getMonth() + 1 == 6 &&
              new Date(date["Purchase Date"]).getFullYear() === year
          ).length,
          data.filter(
            (date) =>
              new Date(date["Purchase Date"]).getMonth() + 1 == 7 &&
              new Date(date["Purchase Date"]).getFullYear() === year
          ).length,
          data.filter(
            (date) =>
              new Date(date["Purchase Date"]).getMonth() + 1 == 8 &&
              new Date(date["Purchase Date"]).getFullYear() === year
          ).length,
          data.filter(
            (date) =>
              new Date(date["Purchase Date"]).getMonth() + 1 == 9 &&
              new Date(date["Purchase Date"]).getFullYear() === year
          ).length,
          data.filter(
            (date) =>
              new Date(date["Purchase Date"]).getMonth() + 1 == 10 &&
              new Date(date["Purchase Date"]).getFullYear() === year
          ).length,
          data.filter(
            (date) =>
              new Date(date["Purchase Date"]).getMonth() + 1 == 11 &&
              new Date(date["Purchase Date"]).getFullYear() === year
          ).length,
          data.filter(
            (date) =>
              new Date(date["Purchase Date"]).getMonth() + 1 == 12 &&
              new Date(date["Purchase Date"]).getFullYear() === year
          ).length,
        ],
      },
    ],
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    // title: {
    //   text: `Total sales for the year ${year}`,
    //   align: "left",
    // },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };

  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <h2>Total sales for the year {year}</h2>
        <label htmlFor="year">Select Year: </label>
        <select
          value={year}
          onChange={(e) => {
            setYear(parseFloat(e.target.value));
          }}
          id="year"
        >
          <option value={2019}>2019</option>
          <option value={2020}>2020</option>
        </select>
        {typeof window !== "undefined" && (
          <Chart
            options={options}
            series={options.series}
            type="line"
            width={500}
          />
        )}
      </div>
    </>
  );
}
