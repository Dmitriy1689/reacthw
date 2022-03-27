import ReactDOM from 'react-dom';
import ModalInner from './modalInner';
import { AnimatePresence } from 'framer-motion'

const Modal = ({currentIndex, closeModal, id, url, title,  description, tags, state }) => {
    return ReactDOM.createPortal(
        <AnimatePresence>
            {state && <ModalInner currentIndex={currentIndex} closeModal={closeModal} id={id} url={url} title={title} description={description} tags={tags} state={state}/>}
        </AnimatePresence>,
        document.getElementById('modal-root')) 
}

export default Modal