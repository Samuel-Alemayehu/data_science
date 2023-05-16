import { useState } from "react";
import { data_sets } from "../util/util";
// import Chart from "react-apexcharts";
import dynamic from "next/dynamic";
import FilterByCategory from "../components/categories";
import PieChart from "../components/piechart";
import DateFilter from "../components/areachart";
import TotalRevenue from "../components/totalRevenue";
export default function Home() {
  return (
    <>
      <PieChart />
      <FilterByCategory />
      <DateFilter />
      <TotalRevenue />
    </>
  );
}
