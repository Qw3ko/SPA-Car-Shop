import React from 'react'
import styles from './CarItem.module.css'
import { Link } from 'react-router-dom'

function CarItem({ car }) {
  return (
  <div key={car.id} className={styles.item}>
    <div className={styles.image} style={{backgroundImage: `url(${car.image})`}} />
    <div className={styles.info}>
      <h2>{car.name}</h2>
      <h3>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(car.price)}</h3>
      <Link style={{marginLeft: '10%'}} className='btn' to={`/car/${car.id}`}>Узнать подробнее</Link>
    </div>
  </div>
  )
}

export default CarItem