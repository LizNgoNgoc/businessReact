import styles from './modal.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { modalNoVisible } from '../../redux/slice/inputSlice'

export default function Modal({}){
    const dispatch = useDispatch()
    const modalActive = useSelector((state) => state.inpSlice)
    const {title, subtitle, price} = modalActive.value

    return <section 
    onClick={() => dispatch(modalNoVisible())} 
    className={`${styles.section} ${modalActive.show ? styles.openModal : ''}`}>
        <div className={styles.content} onClick={e => e.stopPropagation()}>
                <p className={styles.text}>{title}</p>
                <p className={styles.description}>{subtitle}</p>
                <button className={styles.btn_price}>{price}</button>
            </div>
        </section>
}