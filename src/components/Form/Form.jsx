import styles from './form.module.css'
import { arrSlides } from '../../service/Slide'
import { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { counter } from '../../redux/slice/countSlice'
import ListForm from './ListForm'

export default function Form() {
    // let [count, setCount] = useState(0)
    const count = useSelector((state) => {return state.countSlice.value})
    const [arrSlide, setArrSlides] = useState(arrSlides)
    const ref = useRef(null)
    const width = ref.current ? ref.current.clientWidth : 0
    const dispatch = useDispatch()
    useEffect(() => {
        setInterval(()=> {
            dispatch(counter(arrSlide.length))
        }, 3000)
    }, [])

    return(
        <section>
            <div className={styles.banner}>
                <p className={styles.banner_header}>МЫ ГАРАНТИРУЕМ</p>
                <p className={styles.banner_header} style={{transform : `translateX(${count * width * -1}px)`}}>
                    {arrSlide.map(({text}, index) => {
                        return <span ref={ref} className={styles.spanSlide} key={index}>{text}</span> 
                    })}
                </p>
            </div>
            <div className={styles.form_container}>
                <ListForm/>
                <div className={styles.container}>
                    <p className={styles.txt}>Отвечаем в течение одного рабочего дня. 
                    Обсудим ваши задачи в удобном для вас средстве связи. Для наиболее конфиден-циальных 
                    вопросов воспользуйтесь нашими приватными чатами в Telegram или Session.</p>
                    <div className={styles.links}>
                        <a className={`${styles.link} ${styles.tg}`} href="#"></a>
                        <a className={`${styles.link} ${styles.pic}`} href="#"></a>
                        <a className={`${styles.link} ${styles.skype}`} href="#"></a>
                        <a className={`${styles.link} ${styles.mess}`} href="#"></a>
                    </div>
                </div>
            </div>
        </section>
    )
}