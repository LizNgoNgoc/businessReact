import styles from './footer.module.css'


export default function Footer() {
    return (
        <footer className={styles.section}>
            <div className={styles.container}>
                <img src="./img/logo.png" className={styles.logo} alt='img'/>
                <p className={styles.bottom_txt}>AWBusiness.io 2022 © Все права защищены</p>
            </div>
            <div className={styles.container_contacts}>
                <a href='#'>
                    <img src="./img/tg_footer.png"/>
                    <span className={styles.txt}>aw_business</span>
                </a>
                <a href='#'>
                    <img src="./img/pic_footer.png" alt='img'/>
                    <span className={styles.txt}>05f46fc3c1b5d6...</span>
                </a>
                <a href='#'>
                    <img src="./img/mess_footer.png" alt='img'/>
                    <span className={styles.txt}>hello@awbusiness.io</span>
                </a>
                <a href='#'>
                    <img src="./img/skype_footer.png" alt='img'/>
                    <span className={styles.txt}>aw_business</span>
                </a>
            </div>
        </footer>
    )
}