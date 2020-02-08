import "./css/modal.css";
import React from 'react';

const Main = props => {

     const divStyle = {
          display: props.displayModal ? 'block' : 'none'
     };

     function closeModal(e) {
        e.stopPropagation()
        props.closeModal()
     }

      function showClick(id){
           this.props.onClickB(id);
            window.scrollTo(0, 0);
      }

     return (
       <div
         className="modal"
         onClick={ closeModal }
         style={divStyle}>
          <div className="modal-content" onClick={ e => e.stopPropagation() } >
             <span className="close" onClick={ closeModal }>&times;</span>  
             {props.predictions.map((prediction) => (
               <p
                 className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                 key={prediction.id}
               >
                 {prediction.name}
                 <button type="button" onClick={(e) => props.onClickB(prediction.id)} className= "btn btn-info">Ver</button>
                 </p>
             ))}
          </div>
       </div>
     );
}
export default Main;
