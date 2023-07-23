import Section from "../Sections/Section"
import Price from "../Price/Price"
import Work from "../Work/Work"
import Advantage from "../Advantages/Advantages"
import Form from "../Form/Form"
import styles from "./main.module.css"


export default function Main() {


    return(
        <main>
            <Section />
            <Price />
            <Work />
            <Advantage />
            <Form />
        </main>
    )
}