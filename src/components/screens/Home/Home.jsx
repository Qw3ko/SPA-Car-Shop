import React from 'react'
import styles from './Home.module.css'
import CarItem from './car-item/carItem'
import CreateCarForm from './create-car-form/CreateCarForm'
import Header from '../../ui/header/Header'
import { CarService } from '../../../services/car.service'
import { useQuery } from 'react-query'
import SearchCar from './search-car/SearchCar'

function Home() {

    const {data, isLoading} = useQuery(['cars'], () => CarService.getAll())

    if(isLoading) return <p>Загрузка...</p>

    return (
        <> < Header /> <div className={styles.container}>
            <main className={styles.layout}>
                <article className={styles.article}>
                    <div className={styles.card}>
                        <div className={styles.search}>
                            {/* ToDo: Сделать поиск */}
                            <SearchCar />
                        </div>
                    </div>
                </article>
                <aside className={styles.aside}>
                    <section className={styles.card}>
                        <div className={styles.content}>
                            {
                                data.length
                                    ? (data.map(car => <CarItem key={car.id} car={car}/>))
                                    : (<p>Машин нет</p>)
                            }
                        </div>
                    </section>
                </aside>
                <article className={styles.article}>
                    <div className={styles.card}>
                        <div className={styles.form}>
                            <CreateCarForm />
                        </div>
                    </div>
                </article>
            </main>
        </div>
    </>
    )
}

export default Home
