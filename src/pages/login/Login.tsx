import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./login.module.css"
import logo2 from "../../assets/logo2.svg"
import { selectUser } from '../../redux/slices/userSlice'
import { useSelector } from 'react-redux'

const Login: React.FC = () => {

  const { email, pass } = useSelector(selectUser);

  console.log(email);
  console.log(pass);


  const navigate = useNavigate();

  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");

  console.log(emailInput);
  console.log(passInput);
  

  const isValidForm = emailInput.trim() !== "" && passInput.trim() !== "";

  const handleLogin = () => {
    if(emailInput === email && pass === passInput) {
      navigate("/guide");
    }
  }

  return (
    <div className={styles.mainLoginPage}>
      <div className={styles.loginPage}>
        <div className={styles.contetntLoginBlock}>
          <img src={logo2} alt="logo" />
          <div className={styles.descriptionSite}>
            <p>Министерство строительства и жилищно-коммунального хозяйства
            </p>
            <p>Донецкая Народная Республика</p>
          </div>
          <div className={styles.authBlock}>
            <p>Вход</p>
            <div className={styles.authContent}>
              <input value={emailInput} onChange={(e) => setEmailInput(e.target.value)} type="text" placeholder='Логин'/>
              <input value={passInput} onChange={(e) => setPassInput(e.target.value)} type="password" placeholder='Пароль '/>
              <button onClick={handleLogin} disabled={!isValidForm}>Войти</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
