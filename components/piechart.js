import { useState } from "react";
import { data_sets } from "../util/util";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
export default function PieChart() {
  const [data, setData] = useState(data_sets);

  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [income, setIncome] = useState(0);
  const [purchaseAmount, setPurchaseAmount] = useState(0);

  let filteredData;
  filteredData = data.filter((items) => items.Gender.includes(gender));
  filteredData = filteredData.filter(
    (items) => parseFloat(items.Income) >= parseFloat(income)
  );
  filteredData = filteredData.filter(
    (items) => parseFloat(items.Age) >= parseFloat(age)
  );
  filteredData = filteredData.filter(
    (items) =>
      parseFloat(items["Purchase Amount"]) >= parseFloat(purchaseAmount)
  );
  //   console.log(filteredData);
  const datas = {
    options: {
      labels: ["Electronics", "Beauty", "Books", "Clothing", "Toys"],
    },
    series: [
      filteredData.filter((data) => data["Product Category"] === "Electronics")
        .length,
      filteredData.filter((data) => data["Product Category"] === "Beauty")
        .length,
      filteredData.filter((data) => data["Product Category"] === "Books")
        .length,
      filteredData.filter((data) => data["Product Category"] === "Clothing")
        .length,
      filteredData.filter((data) => data["Product Category"] === "Toys").length,
    ],
  };

  return (
    <>
      <h3> Total Sales by Income, age,gender and purchase Amount </h3>
      <label htmlFor="income">Enter Income </label>
      <br></br>
      <input
        id="income"
        value={income}
        onChange={(e) => {
          setIncome(e.target.value);
        }}
        placeholder="Enter Income"
        type="number"
        min={0}
      />

      <br></br>
      <label htmlFor="purchaseAmount">Enter purchaseAmount</label>
      <br></br>
      <input
        id="purchaseAmount"
        value={purchaseAmount}
        onChange={(e) => {
          setPurchaseAmount(e.target.value);
        }}
        placeholder="Enter purchaseAmount"
        type="number"
        min={0}
      />
      <br></br>
      <label htmlFor="age">Enter age</label>
      <br></br>
      <input
        id="age"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
        placeholder="Enter age"
        min={0}
      />
      <br></br>
      <label htmlFor="age">select gender</label>
      <br></br>

      <select
        value={gender}
        onChange={(e) => {
          setGender(e.target.value);
        }}
        id="gender"
      >
        <option value="">Select</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      {typeof window !== "undefined" && filteredData.length > 0 && (
        <Chart
          options={datas.options}
          series={datas.series}
          type="donut"
          width={500}
        />
      )}
      {filteredData.length === 0 && <h1>Can not find any data</h1>}
    </>
  );
}
