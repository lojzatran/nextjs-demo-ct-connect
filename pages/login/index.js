import {useContext, useState} from "react";
import userContext from "../../components/context/UserContext";
import {useRouter} from "next/router";

export default function Login() {
  const {setUser} = useContext(userContext);
  const router = useRouter()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const logIn = async (event) => {
    event.preventDefault()
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username, password
      })
    })
    const jsonResponse = await response.json()
    setUser(jsonResponse.customer)
    router.push('/')
  }

  return (
    <div>
      <form onSubmit={logIn}>
        <h1>Log in</h1>

        <div className="container">
          <label htmlFor="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required onKeyUp={event => {
            setUsername(event.target.value)
          }}/>
        </div>

        <div className="container">
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required onKeyUp={event => {
            setPassword(event.target.value)
          }}/>
        </div>

        <div className="container">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}
