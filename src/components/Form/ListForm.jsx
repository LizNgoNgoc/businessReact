import styles from './form.module.css'
import { Validation } from '../../service/validation'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { recalc } from '../../redux/slice/formSlice'
import { messageInp } from '../../redux/slice/inputSlice' //import slice


export default function ListForm() {

    const dispatchMess = useDispatch() // create a Dispatch
    const {name, mail, comment} = '' // get a mentions

    const textAreaCount = useSelector((state) => state.formSlice.value)
    const dispatch = useDispatch()
    const inputs = useSelector(state => state.inpSlice.value.inputs)
    
    const [errorsValid, setErrorsValid] = useState({
        name: false,
        mail: false,
        comment: false
    })

    function handleChange(e) {
        const input = e.target
        //message[input.name] = input.value
        errorsValid[input.name] = Validation(input) 
        //setMessage({...message})
        setErrorsValid({...errorsValid})
        dispatch(messageInp({[input.name] : input.value})) //get the Dispatch
    }

    function handleSubmit(e) {
        e.preventDefault()
        //console.log(message)
    }

    function recalculate(e) {
        handleChange(e)
        dispatch(recalc(e.target.value.length))
    }

    return <form onSubmit={handleSubmit}>
        <div className={styles.input_initials}>
            <div className={styles.flexInp}>
                <input type="text" value={name} className={`${styles.inp} ${errorsValid.name ? styles.invalid : ''}`} placeholder='Ваше имя *' onChange={handleChange} name='name' />
                {errorsValid.name && <p className={`errorMessadge ${styles.errorMess}`}>Error Name</p>}
            </div>
            <div className={styles.flexInp}> 
                <input type="text" value={mail} className={`${styles.inp} ${errorsValid.mail ? styles.invalid : ''}`} placeholder='Почта или Telegram *' onChange={handleChange} name='mail'/>
                {errorsValid.mail && <p className={`errorMessadge ${styles.errorMess}`}>Error Mail</p>}
            </div> 
        </div>
        <textarea type="text" value={comment} className={styles.inp_comment} onChange={recalculate} maxLength={150} name='comment' placeholder='Опишите ваш задачу или задайте вопрос'></textarea>
            <p className={styles.countText}>{`Введено символов: ${textAreaCount}/150`}</p>
        <div className={styles.btn_cont}>
        <button disabled={Object.values(errorsValid).includes(true)} className={styles.btn}>Отправить</button>
        <p className={styles.politic_txt}>Нажимая кнопку "Отправить" вы соглашаетесь с нашей Политикой данных</p>
        </div>
    </form>
}