import React, {useState , useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import baseUrl from "../url"

function Dashboard(props) {
  const [jobs , setJobs] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function getData(){
      const url =baseUrl + "/list-my-job";
      const res = await axios.get(url, { headers: { "x-auth-token": token } });
      setJobs([...res.data.job]);
      console.log("ss",res.data);
    }
    getData();
    return ()=> [];
  },[]);
  return (
    <div className='p-10 flex flex-col gap-10'>
      <div className='flex justify-between px-10'>
        <h1 className='text-2xl font-bold'>Our openings</h1>
        <Link className='bg-red-500 px-8 text-gray-50 rounded py-2' to="/create-job">
          Create Job
        </Link>
      </div>
      {
        jobs.map(element => {
          return (
          <Link to={`/my-applicant/${element._id}`}>
            <div className='flex flex-col shadow-md rounded p-10'>
              <p className='text-left font-bold'>{element.title.toUpperCase()}</p>
              <p className='text-left text-medium'>{element.description}</p>
            </div>
          </Link>
          )
        })
      }
    </div>
  );
}

export default Dashboard;