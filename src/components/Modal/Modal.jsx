/* eslint-disable react/prop-types */
import './Modal.css'
const Modal = ({children,estado,onclick}) => {
  return (
    <>
      {estado &&
      <div className='overlay-modal'>
      <div className='container-modal'>
        <div className='header-modal'>
          <h3>Planes</h3>
        </div>

        <div className='button-close'>
          <button onClick={onclick}>X</button>
        </div>
        {children}
      </div>
    </div>
      }
    </>
  )
}

export default Modal
