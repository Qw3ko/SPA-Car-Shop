import React, {useState} from 'react'
import styles from './CreateCarForm.module.css'
import {useForm} from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { CarService } from '../../../../services/car.service'

function CreateCarForm() {

    const {register, handleSubmit, reset, formState: {
            errors
    }} = useForm({mode: 'onChange'})

    const queryClient = useQueryClient()


    const {mutate} = useMutation(['create car'], (data) =>
    CarService.create(data), {
        onSuccess: () => {
            queryClient.invalidateQueries('cars')
            reset()
        }
    })

    const createCar = data => {
        mutate(data)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(createCar)}>
            <label>
                Название
                <input {...register('name', { required: 'Требуется название!' })}/> {
                    errors
                        ?.name
                            ?.message && (
                                <p
                                    style={{
                                        color: 'red'
                                    }}>Требуется имя!</p>
                            )
                }
            </label>
            <label>
                Цена
                <input {...register('price', { required: 'true' })}/> {
                    errors
                        ?.price
                            ?.message && (
                                <p
                                    style={{
                                        color: 'red'
                                    }}>Требуется цена!</p>
                            )
                }
            </label>
            <label>
                Цвет
                <input {...register('color', { required: 'true' })}/> {
                    errors
                        ?.color
                            ?.message && (
                                <p
                                    style={{
                                        color: 'red'
                                    }}>Требуется указать цвет!</p>
                            )
                }
            </label>
            <label>
                Изображение
                <input {...register('image', { required: 'true' })}/> {
                    errors
                        ?.image
                            ?.message && (
                                <p
                                    style={{
                                        color: 'red'
                                    }}>Требуется ссылка на изображение!</p>
                            )
                }
            </label>
            <button className={styles.btn}>Создать</button>
        </form>
    )
}

export default CreateCarForm