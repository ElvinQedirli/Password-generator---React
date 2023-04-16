import React, { useState } from 'react';

// COMPONENTS
import Checkbox from './components/Checkbox.jsx';

// Style
import './assets/style/pages/App.css'


function App() {
  const [useUppercase, setUseUppercase] = useState(true);
  const [useLowercase, setUseLowercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [passwordLength, setPasswordLength] = useState(8);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const handlePasswordLengthChange = (e) => {
    setPasswordLength(parseInt(e.target.value));
  };

  const handleGeneratePasswordClick = () => {
    let charset = '';
    if (useUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (useNumbers) charset += '0123456789';
    if (useSymbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }

    setGeneratedPassword(password);
  };



  return (
    <div className='container'>
      <h2>Password Generator</h2>
      <Checkbox
        label="Upper Letter"
        checked={useUppercase}
        onChange={(e) => setUseUppercase(e.target.checked)}
      />
      <Checkbox
        label="Low letter"
        checked={useLowercase}
        onChange={(e) => setUseLowercase(e.target.checked)}
      />
      <Checkbox
        label="Numbers"
        checked={useNumbers}
        onChange={(e) => setUseNumbers(e.target.checked)}
      />
      <Checkbox
        label="Symbols"
        checked={useSymbols}
        onChange={(e) => setUseSymbols(e.target.checked)}
      />
 <label htmlFor="password-length-input">
        Şifre Uzunluğu: {passwordLength}
      </label>
      <input
        id="password-length-input"
        type="range"
        min="8"
        max="32"
        value={passwordLength}
        onChange={handlePasswordLengthChange}
      />
      <button onClick={handleGeneratePasswordClick}>Şifre Oluştur</button>
      <p>{generatedPassword}</p>
    </div>
  );
}

export default App