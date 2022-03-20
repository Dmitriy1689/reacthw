import ReactDOM from 'react-dom';
import ModalInner from './modalInner';

const Modal = ({currentIndex, closeModal, id, url, title,  description, tags, state }) => {
    return ReactDOM.createPortal(
    state && <ModalInner currentIndex={currentIndex} closeModal={closeModal} id={id} url={url} title={title} description={description} tags={tags} state={state}/>, document.getElementById('modal-root')) 
}

export default Modal