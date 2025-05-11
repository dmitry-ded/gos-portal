import React from 'react'
import styles from "./header.module.css"
import logo from "../../assets/ГосПортал.svg"
import { Link, useNavigate } from 'react-router-dom'

const Header: React.FC = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  }

  return (
    <header className={styles.mainHeaderBlock}>
      <section className={styles.contentSection}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <nav className={styles.navBlock}>
          <ul className={styles.navigationUl}>
          <Link to="/guide">
            <li>Справочники</li>
          </Link>
          <li onClick={handleLogout}>Выйти</li>
          </ul>
        </nav>
      </section>
    </header>
  )
}

export default Header
