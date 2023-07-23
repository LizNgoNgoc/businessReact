import styles from './modal.module.css'


export default function Modal({modalActive, setModalActive}){

    const {title, subtitle, price} = modalActive.propertyes

    function handleModal(){
        setModalActive({
            show : false,
            propertyes : {
                title: null,
                subtitle: null,
                price: null
            }
        })
    }

    return <section onClick={handleModal} className={`${styles.section} ${modalActive.show ? styles.openModal : ''}`}>
        <div className={styles.content} onClick={e => e.stopPropagation()}>
                <p className={styles.text}>{title}</p>
                <p className={styles.description}>{subtitle}</p>
                <button className={styles.btn_price}>{price}</button>
            </div>
        </section>
}