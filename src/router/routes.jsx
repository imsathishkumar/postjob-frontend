import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AuthLayout from './auth';
import BasicLayout from "./basic";
import CompanyLayout from './compay';
import ProfessionalLayout from './professional';
import Login from '../auth/login';
import Signup from '../auth/signup';
import Dashboard from '../pages/dashboard';
import CreateJob from '../pages/createjob';
import JobList from "../pages/joblist";
import ApplyJob from '../pages/applyjob';
import GetApplicant from '../pages/getaplicant';

function Router(props) {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Route>
      <Route element={<BasicLayout />}>
        <Route element={<CompanyLayout />}>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/create-job" element={<CreateJob/>} />
          <Route path="/my-applicant/:id" element={<GetApplicant/>} />
        </Route>
        <Route element={<ProfessionalLayout />}>
          <Route path="/job-list" element={<JobList/>} />
          <Route path="/apply-job" element={<ApplyJob/>} />
        </Route>
      </Route>
      <Route path='/' element={<Navigate to="/login" replace/>}/>
    </Routes>
  );
}

export default Router;