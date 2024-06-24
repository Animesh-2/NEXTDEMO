"use client";
import React, { useEffect } from "react";
import DrugsDetail from "./DrugsDetail";

const Drugs = ({ props }) => {
  console.log(props);

  const handleDrugClick = (id) => {
    const fetchApi = async (id) => {
      const data = await fetch(
        `https://rxnav.nlm.nih.gov/REST/rxcui/${id}/allrelated.json`
      );
      const res = await data.json();
      console.log(res.allRelatedGroup);
    };
    fetchApi(id);
  };

  return (
    <div>
      {props.map((drugName) => (
        <div
          key={drugName.rxcui}
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            backgroundColor: "grey",
          }}
          onClick={() => handleDrugClick(drugName.rxcui)}
        >
          <p style={{ fontSize: "20px", fontWeight: "normal" }}>
            {drugName.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Drugs;
