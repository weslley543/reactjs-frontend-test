import React, { useCallback, useEffect } from 'react';
import { Container, Toast } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { ToastMessage } from '../../context/ToastContext'
import { useToast } from '../../context/ToastContext';
import { useCall } from '../../context/CallContext';
interface ToastContainerProps {
  messages: ToastMessage[];
}


const ToastContainer: React.FC <ToastContainerProps>=  ({ messages }) =>{
  const { addToast, removeToast } = useToast();
  const { addToCall } = useCall();
  
  const handleCreate = useCallback((event :KeyboardEvent)=>{
    
    if(event.code === 'ControlLeft'){
      addToast();
    }
    
  }, [addToast])
  useEffect(()=>{
    window.addEventListener('keydown', handleCreate)
  })
  return(
    <Container>
     {
        messages.map((message) => (
          <Toast key={message.id}>
          <div>
            <p>
              Um usuário está solicitando a entrada.
            </p>
            
             <div className="buttonContainer">
              <button onClick={()=>{addToCall(message.id); removeToast(message.id);}} ><FontAwesomeIcon icon={faCheck} size="2x" color="green"/></button>
              <button onClick={()=>{removeToast(message.id);}}><FontAwesomeIcon icon={faTimes} size="2x" color="red"/></button>
             </div>
          </div>
        </Toast>
        ))
     }
    </Container>
  )
};

export default ToastContainer;