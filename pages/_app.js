import Login from "../components/Login";
import UserContext from "../components/context/UserContext";
import {useState} from "react";

function MyApp({Component, pageProps}) {
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Login/>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default MyApp
