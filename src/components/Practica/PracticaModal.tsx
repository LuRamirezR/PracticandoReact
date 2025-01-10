import { Modal } from "../../components/Modal/Modal"
import { useModalContext } from "../Modal/context/UseModalContext"



export const PracticaModal = () => {
    const {setState} = useModalContext()
    const openModal = () => {
        setState(true)
    }
    
    return (
        <>
        <Modal>
            <h3>Hola Alan</h3>
            <h4>Gentleman Programming</h4>
        </Modal>
        <button onClick={openModal}>Ábrete Sésamo</button>
        </>
    )
}

