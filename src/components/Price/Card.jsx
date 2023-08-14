import styles from './price.module.css'
import { useDispatch } from 'react-redux'
import { modalVisible } from '../../redux/slice/inputSlice'

export default function Card({data, className}){
    const dispatch = useDispatch()
    const {title, subtitle, price} = data
    const str =  className ? styles[className] : ''

    return <div onClick={() => dispatch(modalVisible(data))} className={`${styles.content} ${str}`}>
                <p className={styles.text}>{title}</p>
                {/* <p className={styles.description}>{subtitle}</p> */}
                <button className={styles.btn_price}>{price}</button>
            </div>
}
