import { useState } from 'react';
import './register.css';

function App() {
  const [name, setName] = useState('') 
  const [lastName, setLastName] = useState('') 
  const [email, setEmail] = useState('') 
  const [userName, setUserName] = useState('') 
  const [password, setPassword] = useState('') // useState to store Password
  const [checkPassword, setCheckPassword] = useState('')

  const nameRegex = /^[A-Za-z ]+$/;
  const lastnameRegex = /^[A-Za-z ]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const usernameRegex = /^[a-zA-Z0-9!@#$%^&*()-=_+]+$/;
  const passwordRegex = /^.{1,8}$/;

  function validateForm() {

    if (name ==='' || lastName ==='' || email ===''|| userName === '' || password === ''|| checkPassword === '') {
        alert('Please input data into the fields');
        return;
      }
    
      // Validate name
      if (!nameRegex.test(name)) {
        alert('Name Invalid');
        return;
      }
    
      // Validate Last name
      if (!lastnameRegex.test(lastName)) {
        alert('Last Name Invalid');
        return;
      }
    
      if (!emailRegex.test(email)) {
        alert('Email Invalid');
        return;
      }
    
      // Validate username
      if (!usernameRegex.test(userName)) {
        alert('User Name Invalid');
        return;
      }
    
      // Validate password
      if (!passwordRegex.test(password)) {
        alert('Password Invalid');
        return;
      }
    
     if (password !== checkPassword) {
        alert('Passwords do not match');
        return;
      }

    const loginUserData = {
        name: name,
        lastname: lastName,
        email: email,
        username: userName,
        password: password
    };

    console.log(loginUserData);

    alert('Success');
  };


  return (
    <div className="container">
      <form >
      <input 
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="text"
          placeholder="LastName"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input 
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
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
        <input
          type="password"
          placeholder="CheckPassword"
          onChange={(e) => setCheckPassword(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            validateForm()
          }}
        >Register
        </button>
      </form>
    </div>
  )
}

export default App