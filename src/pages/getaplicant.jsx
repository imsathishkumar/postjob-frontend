import React , {useState, useEffect} from 'react';
import {
  useParams
} from "react-router-dom";
import axios from 'axios';
import baseUrl from "../url"

function GetApplicant(props) {
  let { id } = useParams();
  const [job , setJob] = useState(null);
  const [applicants , setApplicants] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    async function getData(){
      const url = `${baseUrl}/list-my-applicant?id=${id}`;
      const res = await axios.get(url, { headers: { "x-auth-token": token } });
      setJob(res.data.job);
      setApplicants([...res.data.applicant]);
    }
    getData();
  },[]);
  return (
    <div className='p-10 flex flex-col gap-10'>
      <div className='flex justify-between px-10'>
        <h1 className='text-2xl font-bold'>{job?.title?job.title : ""} Applicants</h1>
      </div>
      {
        applicants.map(element => {
          return (<div key={element._id} className='flex flex-col shadow-md rounded p-10'>
            <p className='text-left font-bold'>{element.applicantName}</p>
            <p className='text-left text-medium'>{element.email}</p>
          </div>)
        })
      }
    </div>
  );
}

export default GetApplicant;