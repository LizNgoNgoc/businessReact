import styles from './price.module.css'



export default function Card({data, setModalActive, className}){
    const {title, subtitle, price} = data
    function handleModal(e){
        setModalActive({
            show : true,
            propertyes : {title, subtitle, price}
        })
    }
    const str =  className ? styles[className] : ''

 
    return <div onClick={handleModal} className={`${styles.content} ${str}`}>
                <p className={styles.text}>{title}</p>
                {/* <p className={styles.description}>{subtitle}</p> */}
                <button className={styles.btn_price}>{price}</button>
            </div>
 
}
