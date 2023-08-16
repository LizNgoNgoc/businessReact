import { useState } from 'react'
import styles from './work.module.css'

export default function Work() {
   

    return(
        <section className={styles.section}>
            <h3 className={styles.head}>КАК МЫ РАБОТАЕМ?</h3>
            <div>
                <div className={styles.numb} >1</div>
                <p className={styles.text}>Мы начинаем работать над вашим запросом сразу после первого сообщения. 
                    Вы можете связаться с нами по электронной почте, Skype или через контактную форму 
                    на этом сайте. Вы также можете воспользоваться чатом Telegram, чтобы отправить нам свои 
                    самые конфиденциальные вопросы.</p>
            </div>
            <div>
                <div className={styles.numb}>2</div>
                <p className={styles.text}>Мы свяжемся с вами как можно скорее, чтобы уточнить все детали и предложить наиболее
                    оптимальное и эффективное решение. </p>
            </div>
            <div className={styles.modified}>
                <div className={styles.numb}>3</div>
                <p className={styles.text}>Наша команда предоставит вам несколько возможных решений на выбор и детали партнерства. 
                    Вам останется только предоставить необходимые документы и произвести все необходимые платежи.</p>
            </div>
            <div>
                <div className={styles.numb}>4</div>
                <p className={styles.text}>Мы работаем так, чтобы сотрудничество с нашими партнерами оставалось взаимовыгодным, продуктивным и долгосрочным. 
                    Именно поэтому большинство партнеров остаются с нами на долгие годы.</p>
            </div>
        </section>
    )
}