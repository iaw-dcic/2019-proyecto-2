import '../../../public/css/modal.css';
import React from 'react';

const Modal = props => {

     const divStyle = { 
          display: props.displayModal ? 'block' : 'none'
     };

     function closeModal(e) {
        e.stopPropagation()
        props.closeModal()
     }

     return (
       <div 
         className="modal" 
         onClick={ closeModal }
         style={divStyle}>
          <div className="modal-content" onClick={ e => e.stopPropagation() } >            
             <span className="close" onClick={ closeModal }>&times;</span>
             {
                   props.allfundas.map(funda =>  
                     <button className="btn btn-style" key={funda.id} onClick={() =>props.onClick(funda.id)}>{funda.name} </button>
                     )
            }     
          </div>
       </div>
     );
}
export default Modal;