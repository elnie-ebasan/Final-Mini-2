import { useState } from "react";
import SignInButtons from "../SignInButtons/SignInButtons";
import './SignInForm.css'
import headerLogo from '../../../UI-images/mensahe-logo.jpg'

const users = [
  { username: "elnie.ebasan", password: "Abc123**" },
  { username: "el.yan", password: "Abcd1234**" },
];

function SignInForm () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogIn = (event) => {
    event.preventDefault();
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      console.log("Logged in as:", user.username);
      setUsername("");
      setPassword("");
      setTimeout(() => {
        window.location.href = "/user";
      }, 2000);
    } else {
      setLoginStatus("error");
      console.log("Incorrect username or password");
      setTimeout(() => {
        setLoginStatus("");
      }, 2000);
    }
  };  

  const handleSignup = (event) => {
    event.preventDefault();
    console.log('Register');
  };

  return (
    <div className="SignInForm-area">
      <div className="signIn">
        <div className="header">
          <img src={headerLogo} alt="logo" style={{width: '60px'}} />
          <p>ensahe</p>
        </div>

        {loginStatus && (
        <div className={`login-message ${loginStatus}`}>
          {loginStatus === "success" ? "Login successful!" : "Invalid username or password."}
        </div>
      )}
      <form className="signInForm" onSubmit={handleLogIn}>
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={handleUsernameChange}
        />
        <br />
        <br />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        <br />
        <SignInButtons onSignIn={handleLogIn} onRegister={handleSignup} />
      </form>
      </div>
    </div>
  );
}

export default SignInForm
