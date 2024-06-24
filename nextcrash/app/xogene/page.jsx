"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Drugs from "../component/Drugs";

const xogene = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    if (searchText) {
      try {
        const data = await fetch(
          `https://rxnav.nlm.nih.gov/REST/drugs.json?name=${searchText}`
        );
        const res = await data.json();
        if (res) {
          if (res.drugGroup.conceptGroup) setData(res.drugGroup.conceptGroup);
        } else {
          setData([]);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const handleByEnter = (e) => {
    if (e.key === "Enter") {
      fetchApi();
    }
  };

  const handleButtonClick = () => {
    fetchApi();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      Search Drugs name
      <br />
      <div
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "5px",
          borderRadius: "5px",
        }}
      >
        <input
          type="text"
          placeholder=" search drugs here"
          onChange={handleSearchText}
          onKeyDown={handleByEnter}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginRight: "5px",
            borderRadius: "5px",
          }}
        />
        <button
          style={{
            cursor: "pointer",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "#f0f0f0",
          }}
          onClick={handleButtonClick}
        >
          <FaSearch />
        </button>
      </div>
      {data?.length > 0 &&
        data?.map((conceptGroup, index) => (
          <div key={index}>
            <label style={{ border: "1px solid grey" }}>
              {conceptGroup.conceptProperties && (
                <Drugs props={conceptGroup.conceptProperties} />
              )}
            </label>
          </div>
        ))}
    </div>
  );
};

export default xogene;
