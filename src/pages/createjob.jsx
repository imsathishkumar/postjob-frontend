import React ,{ useState } from 'react';
import { Navigate, Outlet } from "react-router-dom";
import baseUrl from "../url";
import axios from 'axios';

function CreateJob(props) {
  const [data, setData] = useState({ title: "", description: "" });
  const token = localStorage.getItem("token");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(data);
      const url =baseUrl + "/create-job";
      const res = await axios.post(url, data ,{ headers: { "x-auth-token": token } });
      <Navigate to="/dashboard" />
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <form className='flex w-96 mx-auto flex-col items-center mt-24' onSubmit={handleSubmit}>
          <h1 className='font-bold text-xl mb-10'>Create Job</h1>
          <label className='text-left w-full'>Job Title</label>
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={data.title}
            required
            className="input w-full"
          />
          <label className='text-left w-full'>Job Description</label>
          <textarea
            type="text"
            placeholder="Description"
            name="description"
            onChange={handleChange}
            value={data.description}
            required
            className="input h-64 w-full"
          />
          <button className='bg-green-500 px-8 mt-10 text-gray-50 rounded py-2' type="submit">
            Submit
          </button>
      </form>
    </div>
  );
}

export default CreateJob;