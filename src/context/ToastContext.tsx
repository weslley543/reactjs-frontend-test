import React, { createContext, useContext, useCallback, useState } from 'react';
import { v4 } from 'uuid';
import ToastContainer from '../components/ToastContainer';

export interface ToastMessage{
  id:string;
}

interface ToastContextData{
  addToast():void;
  removeToast(id:string):void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);


const ToastProvider: React.FC = ({children})=>{
  const [messages, setMessages] = useState<ToastMessage[]>([]);
  const addToast = useCallback(()=>{
    const id = v4();
    const toast = { id };
    setMessages((oldMessages) =>[...oldMessages, toast]);
  }, []);
  const removeToast = useCallback((id:string)=>{
    setMessages(state => state.filter(message => message.id !== id));
  }, []);
  return (
  
    <ToastContext.Provider value={{addToast, removeToast}}>
      {children}
      <ToastContainer messages = {messages}/>
    </ToastContext.Provider>
  )
};

function useToast (): ToastContextData {
  const context = useContext(ToastContext);
  if(!context){
    throw new Error('Não é possível usar o Toast');
  }
  return context;
}

export { useToast, ToastProvider };