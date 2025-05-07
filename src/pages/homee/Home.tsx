import React from 'react'
import styles from "./home.module.css"

const Home: React.FC = () => {
  return (
    <div className={styles.mainHomeBlock}>
      <div className={styles.bodyHomeBlock}>
        <div className={styles.card}>
          <h3>Полное наименование кладбища/территории захоронения</h3>
          <input type="text" placeholder="Заполните поле" />
        </div>
        <div className={styles.card}>
          <h3>Тип кладбища/территории захоронений</h3>
          <select>
            <option value="">None</option>
            <option value="1">Option 1</option>
            <option value="2">option 2</option>
          </select>
        </div>
        <div className={styles.card}>
          <h3>Статус кладбища</h3>
          <select>
            <option value="">None</option>
            <option value="1">Option 1</option>
            <option value="2">option 2</option>
          </select>
        </div>
        <div className={styles.card}>
          <h3>Количество фактических захоронений</h3>
          <input type="text" placeholder="Заполните поле" />
        </div>
        <div className={styles.card}>
          <h3>Адрес кладбища/территории захоронения (при наличии)</h3>
          <input type="text" placeholder="Заполните поле" />
        </div>
        <div className={styles.card}>
          <h3>Координаты земельного участка (при наличии)</h3>
          <input type="text" placeholder="Заполните поле" />
        </div>
        <button>Сохранить</button>
      </div>
    </div>
  )
}

export default Home
