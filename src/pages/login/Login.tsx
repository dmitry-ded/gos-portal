import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./login.module.css"
import logo2 from "../../assets/logo2.svg"
import { useAppDispatch } from '../../redux/store'
import { setUser } from '../../redux/slices/userSlice'

const Login: React.FC = () => {


  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const isValidForm = email.trim() !== "" && pass.trim() !== "";

  const handleLogin = () => {
    dispatch(setUser({email, pass}));
    navigate("/guide")
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
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Логин'/>
              <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='Пароль '/>
              <button onClick={handleLogin} disabled={!isValidForm}>Войти</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
