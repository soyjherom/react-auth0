import logo from '../logo.svg';
import '../App.css';
import { LoginButton } from './Login.js'
import { LogOut } from './Logout.js'
import { Profile } from './Profile.js'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const { isAuthenticated } = useAuth0()
  console.log(isAuthenticated)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Profile />
        { isAuthenticated ? <LogOut /> : <LoginButton /> }
      </header>
    </div>
  );
}

export default App;
