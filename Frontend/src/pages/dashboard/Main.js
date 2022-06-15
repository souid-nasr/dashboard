import React from "react";
import TopTotal from "./TopTotal";
import StudentsStatistics from "./StudentsStatistics";
import UniversitiesStatistics from "./UniversitiesStatistics";
import { useSelector } from "react-redux";

const Main = () => {

  // const universityList = useSelector((state) => state.universityList);
  // const { universities } =universityList;
  // console.log(universityList)
  return (
    <>
      <section className="content-main">
        <div className="content-header">
          <h2 className="content-title"> Dashboard </h2>
        </div>
        {/* Top Total */}
        <TopTotal />

        <div className="row">
          {/* STATICS */}
          <StudentsStatistics />
          <UniversitiesStatistics />
        </div>


      </section>
    </>
  );
};

export default Main;
