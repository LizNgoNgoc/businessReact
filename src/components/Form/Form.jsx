import styles from './form.module.css'
import { arrSlides } from '../../service/Slide'
import { useEffect, useRef, useState } from 'react'
import { Validation } from '../../service/validation'


    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
    }


export default function Form() {
    const [message, setMessage] = useState({
        name: '',
        mail: '',
        comment: ''
    })
    let [count, setCount] = useState(0)
    const [arrSlide, setArrSlides] = useState(arrSlides)
    const ref = useRef(null)
    const width = ref.current ? ref.current.clientWidth : 0

    useEffect(() => {
        setInterval(()=> {
            count < arrSlide.length - 1 ? setCount(++count) : setCount(count = 0)
        }, 3000)
    }, [])

    function handleChange(e) {
        const input = e.target
        message[input.name] = input.value
        Validation(input)
        setMessage(message)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(message)
    }

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
                <form onSubmit={handleSubmit}>
                    <div className={styles.input_initials}>
                        <input type="text" value={message.name} className={styles.inp} placeholder='Ваше имя *' onChange={handleChange} name='name' />
                        <input type="text" value={message.mail} className={styles.inp} placeholder='Почта или Telegram *' onChange={handleChange} name='mail'/>
                    </div>
                    <textarea type="text" value={message.comment} className={styles.inp_comment} onChange={handleChange} name='comment' placeholder='Опишите ваш задачу или задайте вопрос'></textarea>
                    <div className={styles.btn_cont}>
                    <button className={styles.btn}>Отправить</button>
                    <p className={styles.politic_txt}>Нажимая кнопку "Отправить" вы соглашаетесь с нашей Политикой данных</p>
                    </div>
                </form>
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