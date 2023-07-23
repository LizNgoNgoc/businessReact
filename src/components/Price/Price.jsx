import Card from './Card'
import styles from './price.module.css'
import { arrCards } from '../../service/Cards'
import Modal from './Modal'
import { createPortal } from 'react-dom'
import { useState } from 'react'

export default function Price() {
    const [modalActive, setModalActive] = useState({
        show : false,
        propertyes : {
            title: null,
            subtitle: null,
            price: null
        }
    })

    // const cardLong = arrCards[arrCards.length - 1]

    return(
        <section className={styles.section}>
           <div className={styles.container_price}>
                <div className={styles.cont_block}>
                    {arrCards.map((item, index) => { 
                        const className = index === arrCards.length - 1 ? 'longCard': ''
                        return <Card setModalActive={setModalActive} className ={className} data={item} key={index}/>
                    })}
                    {arrCards.map((item, index) => {
                        return index === arrCards.length - 1 
                    })}
                    {/* <cardLong className={styles.longCard} /> */}
                    <div className={`${styles.content} ${styles.consult}`}>
                        <p className={styles.text}>Консультация</p>
                        <button className={styles.btn_inp} ></button>
                    </div>
                </div>
            </div> 
            {createPortal(<Modal modalActive={modalActive} setModalActive={setModalActive}/>, document.querySelector('#root'))}
        </section>
    )
}