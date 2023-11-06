import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Header from '../../ui/header/Header'
import { CarService } from '../../../services/car.service'
import styles from './CarDetail.module.css'

function CarDetail() {
    const {id} = useParams()
    const [car, setCar] = useState({})

    useEffect(() => {
        if(!id) return

        const fetchData = async () => {
            const data = await CarService.getById(id)

            setCar(data)
        }

        fetchData()
    }, [id])

    return (
    <> < Header />
    <div className={styles.container}>
        <div key={car.id} className={styles.item}>
            <div className={styles.image} style={{backgroundImage: `url(${car.image})`}} />
            <div className={styles.info}>
                <h1>{car.name}</h1>
                <h2>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(car.price)}</h2>
                <h3>Цвет: {car.color}</h3>
                <br></br>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel neque egestas, tempus odio quis, rhoncus elit. 
                    Pellentesque vehicula dapibus sapien dictum congue. Proin eros libero, volutpat venenatis lectus sit amet, auctor vestibulum leo. 
                    In tempor libero vel rutrum aliquet. Nam id purus id augue posuere ornare a a ligula. Mauris hendrerit quis lectus id mollis. 
                    Quisque ac lectus scelerisque, laoreet orci ut, euismod neque.
                </p><br />
                <p>Nullam consequat nisi vel tortor consectetur blandit. Donec sit amet aliquam tellus. In hac habitasse platea dictumst. 
                    Quisque metus turpis, vestibulum sed vehicula vitae, consectetur a nunc. 
                    Cras interdum bibendum tellus at eleifend. Vivamus a leo mattis, eleifend massa sit amet, commodo magna. 
                    In accumsan lacus nec maximus ullamcorper. Praesent sed cursus nunc. Cras eu urna sit amet nibh feugiat ornare placerat vitae metus. 
                    Donec tempor, neque at elementum malesuada, quam purus mattis enim, sed lacinia diam mi ac diam. 
                    Integer sit amet leo pharetra augue dapibus vehicula quis sit amet ligula.
                </p>
            </div>
        </div>
    </div>
    </>
    )
}

export default CarDetail