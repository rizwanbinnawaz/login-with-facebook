import React, { useState } from 'react';
import FacebookLogin from 'login-with-facebook';

const App = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const fbLogin = new FacebookLogin('1653232442192688');

  const handleLogin = () => {
    fbLogin.login((err, data) => {
      if (err) {
        setError(err);
        setUserData(null);
      } else {
        setUserData(data);
        setError(null);
      }
    });
  };

  return (
    <div>
      <h1>Facebook Login Demo</h1>
      <button onClick={handleLogin}>Login with Facebook</button>
      {error && <p style={{ color: 'red' }}>Error: {error.message || error}</p>}
      {userData && <pre>User Data: {JSON.stringify(userData, null, 2)}</pre>}
    </div>
  );
};

export default App;
