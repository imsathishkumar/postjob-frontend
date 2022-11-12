import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useState, createContext } from 'react'
import './App.css'
import Router from "./router/routes";
import AppLayout from "./app-layouts";
const temp = localStorage.getItem("user");

const UserContext = createContext();
function App() {
  const [user, setUser] = useState(JSON.parse(temp));

  return (
    <UserContext.Provider value={[user,setUser]}>
      <main className="App relative">
        <AppLayout>
          <Router />
        </AppLayout>
      </main>
    </UserContext.Provider>
  )
}

export default App;

export { UserContext };
