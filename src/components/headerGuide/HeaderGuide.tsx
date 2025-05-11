import React from 'react'
import styles from "./header.module.css"
import logo from "../../assets/logo2.svg"
import { Link, useNavigate } from 'react-router-dom'

const HeaderGuide: React.FC = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
      navigate("/login");
    }

  return (
    <header className={styles.mainHeaderBlock}>
      <section className={styles.contentSection}>
        <div className={styles.logoBlock}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <h2>Справочник сведений о кладбищах и местах захоронений на них</h2>
        </div>
        <nav className={styles.navBlock}>
          <ul className={styles.navigationUl}>
          <li onClick={handleLogout}>Выйти</li>
          </ul>
        </nav>
      </section>
    </header>
  )
}

export default HeaderGuide
