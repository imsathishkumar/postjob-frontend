import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import baseUrl from "../url";

function JobList(props) {
  const [jobs, setJobs] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function getData() {
      const url = baseUrl + "/show-job";
      const res = await axios.get(url, { headers: { "x-auth-token": token } });
      setJobs([...res.data.job]);
      console.log("ssk", res.data);
    }
    getData();
  }, []);
  async function handleApply(id ,e) {
    try {
      console.log(id);
      const url = baseUrl + "/apply-job";
      const data = { jobId: id };
      await axios.post(url, data, { headers: { "x-auth-token": token } });
      e.target.style.display = "none";
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="p-10 flex flex-col gap-10">
      <div className="flex justify-between px-10">
        <h1 className="text-2xl font-bold">Opening Jobs</h1>
      </div>
      {jobs.map((element) => {
        return (
          <div className="flex flex-col shadow-md rounded p-10">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-left font-bold">{element.title.toUpperCase()}</p>
                <p className="text-left text-medium">{element.description}</p>
              </div>
              <button
                className="bg-green-500 px-8 mt-10 text-gray-50 rounded py-2"
                onClick={(e) => handleApply(element._id,e)}
              >
                Apply
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default JobList;
