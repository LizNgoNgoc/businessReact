import styles from './section.module.css'

export default function Section() {


    return(
        <section>
            <div className={styles.container}>
                <h3 className={styles.head}>ВАШ БИЗНЕС БЕЗ СЛОЖНОСТЕЙ И ГРАНИЦ</h3>
                <img src="./img/Line 2.png" className={styles.line} alt='img'/>
                <p className={styles.information}>Мы берем на себя самые сложные задачи, связанные 
                    с регистрацией и релокацией бизнеса в любые точки мира. </p>
                <button className={styles.down_btn}><img src='./img/button_down.png' alt='img'></img></button>
                <h3 className={styles.header}>МЫ ПОМОГАЕМ</h3>
                <p className={styles.information}>компаниям любого размера и вида деятельности, в вопросах связанных 
                    с оптимизацией доходов и расходов. Открываем зарубежные бизнес-счета и подключаем мерчантов под любые задачи, 
                    даже связанные с high-risk проектами. Мы знаем, как построить любую финансовую вертикаль, и делаем это на 100% 
                    легально.</p>
            </div>
        </section>
    )
}