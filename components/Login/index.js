import Link from "next/link";
import { useContext } from 'react';
import userContext from '../../components/context/UserContext';

function Login() {
  const {user} = useContext(userContext)

  if (user)
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 25
        }}
      >
        Welcome {user.email}
      </div>
    )
  else
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 25
        }}
      >
        <Link href='/login'>Login</Link>
      </div>
    )
}

export default Login
