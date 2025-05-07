import React from 'react'
import styles from "./lauoyt.module.css"
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'
import HeaderGuide from '../../components/headerGuide/HeaderGuide'

const Layout: React.FC = () => {

  const location = useLocation();
  const isLogin = location.pathname === "/login" 
  const isGuide = location.pathname === "/guide" 


  return (
    <div className={styles.mainHomeBlock}>
      {
        !isLogin &&
        <div className={styles.headerBlock}>
          {isGuide ? <HeaderGuide /> : <Header />}
        </div>
      }
      <div className={styles.childrenBlock}>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
