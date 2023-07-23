import styles from './header.module.css'

export default function Header() {


    return(
        <header>
            <a className={styles.logo} href="#"></a>
            <div className={styles.links}>
                <a className={`${styles.link} ${styles.tg}`} href="#"></a>
                <a className={`${styles.link} ${styles.pic}`} href="#"></a>
                <a className={`${styles.link} ${styles.skype}`} href="#"></a>
                <a className={`${styles.link} ${styles.mess}`} href="#"></a>
            </div>
        </header>
    )
}