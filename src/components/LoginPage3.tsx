import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate()

  function handleLogin() {
    // After validating credentials...
    navigate('/dashboard', { replace: true }) // Navigate to the dashboard page
  }

  return (
    <button onClick={handleLogin}>Login</button>
  )
}
export default LoginPage