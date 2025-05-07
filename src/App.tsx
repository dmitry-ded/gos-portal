import { Route, Routes } from 'react-router-dom'
import styles from "./App.module.css"
import Layout from './pages/layouts/Layouts'
import Login from './pages/login/Login'
import Home from './pages/homee/Home'
import Guide from './pages/guide/Guide'

function App() {

  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/guide' element={<Guide />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
