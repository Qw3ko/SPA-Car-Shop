import React from 'react'
import styles from './Header.module.css'

function Header() {
    return (
        <header>
            <nav className={styles.navContainer}>
                <a className={styles.title} href='#'>AutoSeller</a>
                <div className={styles.menu}>
                    <a className={styles.btnMenu} href='#'>Контакты</a>
                    <a className={styles.btnMenu} href='#'>О нас</a>
                </div>
            </nav>
        </header>
    )
}

export default Header
