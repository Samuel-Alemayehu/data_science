// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import papaparse from "papaparse";
export default function Home() {
  // const changeHandler = (event) => {
  //   // Passing file data (event.target.files[0]) to parse using Papa.parse
  //   papaparse.parse(event.target.files[0], {
  //     header: true,
  //     skipEmptyLines: true,
  //     complete: function (results) {
  //       console.log(results.data);
  //     },
  //   });
  // };
  return (
    <>
      <h1>HEllo world</h1>
      <div>
        <input
          type="file"
          name="file"
          accept=".csv"
          onChange={changeHandler}
          style={{ display: "block", margin: "10px auto" }}
        />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
