import styles from './form.module.css'
import { Validation } from '../../service/validation'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { recalc } from '../../redux/slice/formSlice'

export default function ListForm() {

    // const [textAreaCount, setTextAteaCount] = useState(0)
    const textAreaCount = useSelector((state) => state.formSlice.value)
    const dispatch = useDispatch()
    const [message, setMessage] = useState({
        name: '',
        mail: '',
        comment: ''
    })
    
    const [errorsValid, setErrorsValid] = useState({
        name: false,
        mail: false,
        comment: false
    })

    function handleChange(e) {
        const input = e.target
        message[input.name] = input.value
        errorsValid[input.name] = Validation(input)
        setMessage({...message})
        setErrorsValid({...errorsValid})
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(message)
    }

    function recalculate(e) {
        handleChange(e)
        dispatch(recalc(e.target.value.length))
    }

    return <form onSubmit={handleSubmit}>
        <div className={styles.input_initials}>
            <div className={styles.flexInp}>
                <input type="text" value={message.name} className={`${styles.inp} ${errorsValid.name ? styles.invalid : ''}`} placeholder='Ваше имя *' onChange={handleChange} name='name' />
                {errorsValid.name && <p className={`errorMessadge ${styles.errorMess}`}>Error Name</p>}
            </div>
            <div className={styles.flexInp}> 
                <input type="text" value={message.mail} className={`${styles.inp} ${errorsValid.mail ? styles.invalid : ''}`} placeholder='Почта или Telegram *' onChange={handleChange} name='mail'/>
                {errorsValid.mail && <p className={`errorMessadge ${styles.errorMess}`}>Error Mail</p>}
            </div> 
        </div>
        <textarea type="text" value={message.comment} className={styles.inp_comment} onChange={recalculate} maxLength={150} name='comment' placeholder='Опишите ваш задачу или задайте вопрос'></textarea>
            <p className={styles.countText}>{`Введено символов: ${textAreaCount}/150`}</p>
        <div className={styles.btn_cont}>
        <button disabled={Object.values(errorsValid).includes(true)} className={styles.btn}>Отправить</button>
        <p className={styles.politic_txt}>Нажимая кнопку "Отправить" вы соглашаетесь с нашей Политикой данных</p>
        </div>
    </form>
}