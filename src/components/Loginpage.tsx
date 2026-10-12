// src/LoginPage.tsx

import { useState } from 'react'
import './LoginPage.css'

function LoginPage() {

  const [email, setEmail]               = useState("")
  const [password, setPassword]         = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [isLoggedIn, setIsLoggedIn]     = useState(false)

  function handleLogin() {
    if (email === "" || password === "") {
      setErrorMessage("Please fill in all fields.")
      return
    }

    if (email === "student@react.com" && password === "react123") {
      setIsLoggedIn(true)
      setErrorMessage("")
    } else {
      setErrorMessage("Incorrect email or password.")
      setIsLoggedIn(false)
    }
  }

  function handleLogout() {
    setIsLoggedIn(false)
    setEmail("")
    setPassword("")
    setErrorMessage("")
  }

  if (isLoggedIn) {
    return (
      <div className="container">
        <div className="card">
          <h2>Welcome!</h2>
          <p>You have successfully logged in as:</p>
          <p className="email-display">{email}</p>
          <button className="btn btn-logout" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Login</h2>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            className="input-field"
          />
        </div>

        {errorMessage && (
          <p className="error-message">{errorMessage}</p>
        )}

        <button className="btn btn-login" onClick={handleLogin}>
          Login
        </button>

        <p className="hint">
          Use: student@react.com / react123
        </p>
      </div>
    </div>
  )
}

export default LoginPage