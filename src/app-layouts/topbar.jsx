import React, { useContext } from 'react';
import { UserContext} from "../App";

function Topbar(params) {
  const [user , setUser] = useContext(UserContext);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  }

  return (
    <div className='w-full py-4 shadow-md'>
     <div className='container px-4 mx-auto flex justify-between'>
      <h1 className='text-2xl font-bold'>Job Search</h1>
      <button onClick={handleSignOut} className='bg-red-400 px-4 py-2 rounded shadow text-gray-50'>Sign Out</button>
     </div>
    </div>
  )
}

export default Topbar;
