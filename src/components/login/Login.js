
import { useState } from 'react';
import './styles.css';

function App() {
  const [userName, setUserName] = useState('') // useState to store First Name
  const [password, setPassword] = useState('') // useState to store Password

  const usernameRegex = /^[A-Za-z\s]+$/;
  const passwordRegex = /^.{1,8}$/;

  function validateForm() {

    if (userName === '' || password === '') {
      alert('Please input data into the fields');
      return;
    }

    if (!usernameRegex.test(userName)) {
      alert('Username Invalid');
      return;
    }

    if (!passwordRegex.test(password)) {
      alert('Password Invalid');
      return;
    }

    const loginUserData = {
      username: userName,
      password: password
    };

    console.log(loginUserData);

    alert('Success');
  };


  return (
    <div className="container">
      <form >
        {/* Input Field to insert First Name */}
        <input 
          type="text"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            validateForm()
          }}
        >Submit
        </button>
      </form>
    </div>
  )
}

export default App