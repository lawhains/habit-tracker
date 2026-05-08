import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { api } from './services/api';

function LoginPage() {
  return(
    <h2>Login Page</h2>
  );
}

function RegisterPage() {
  return(
    <h2>Register Page</h2>
  );
}

/* - useState creates a piece of state called status that starts as 'Checking...'.
 *   When setStatus is called with a new value, React re-renders the component to show the updated text.
 *
 * - useEffect runs code when the component first appears on screen. The empty array [] at the end means
 *   "run this once, when the component mounts."
 */
function DashboardPage() {
  const [status, setStatus] = useState('Checking...');

  useEffect(() => {
    api.healthCheck()
      .then(data => setStatus(data.status))
      .catch(() => setStatus('Could not connect to server'));
  }, []);

  return(
    <div>
      <h2>Dashboard</h2>
      <p> Server status: {status}</p>
    </div>
  );
}

function App() {
  return (
    <Router>  {/*Wraps entire app, enabling client side routing. Listens to browser URL bar and decides which component to display*/}
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path ="/" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;