import { useState } from "react";
import { data_sets } from "../util/util";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
export default function FilterByCategory() {
  const [data, setData] = useState(data_sets);

  const datas = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Electronics", "Beauty", "Books", "Clothing", "Toys"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [
          data.filter((data) => data["Product Category"] === "Electronics")
            .length,
          data.filter((data) => data["Product Category"] === "Beauty").length,
          data.filter((data) => data["Product Category"] === "Books").length,
          data.filter((data) => data["Product Category"] === "Clothing").length,
          data.filter((data) => data["Product Category"] === "Toys").length,
        ],
      },
    ],
  };

  return (
    <>
      <h3>Total sales by Category</h3>
      {typeof window !== "undefined" && (
        <Chart
          options={datas.options}
          series={datas.series}
          type="bar"
          width={500}
        />
      )}
    </>
  );
}
