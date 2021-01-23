import React, { createContext, useCallback, useContext, useState } from 'react';

export interface UserData {
  id:string;
}

interface CallContextData {
  addToCall(id_usuario_chamada: string):void;
  removeFromCall(id_usuario_chamada: string):void;
  userData:UserData[];
}

const CallContext = createContext<CallContextData>({} as CallContextData);

const CallContextProvider : React.FC = ({ children })=>{
  const [userData, setUserData] = useState<UserData[]>(() =>{
    const users = JSON.parse(localStorage.getItem('@Eventials:usersOnCall') || '[]');
    return users;
  });
  
  const addToCall = useCallback((id_usuario_chamada: string)=>{
  
    const users = JSON.parse(localStorage.getItem('@Eventials:usersOnCall') || '[]');
    localStorage.removeItem('@Eventials:usersOnCall');
    const user = { id: id_usuario_chamada }
    setUserData([...userData, user]);
    localStorage.setItem('@Eventials:usersOnCall', JSON.stringify([...users, user]));
    
  }, [userData])
  
  const removeFromCall = useCallback((id_usuario_chamada:string)=>{
    
    setUserData(state => state.filter(user => user.id !== id_usuario_chamada));
    const users = userData.filter(user => user.id !== id_usuario_chamada);
    localStorage.setItem('@Eventials:usersOnCall', JSON.stringify(users));
  }, [userData])

  return (
    <CallContext.Provider value={{ addToCall, userData, removeFromCall }}>
      {children}
    </CallContext.Provider>
  )
};

function useCall(): CallContextData{
  const context = useContext(CallContext);
 
  if(!context){
    throw new Error('Contexto precisa ser iniciado dentro de um provider');
  }
  return context;
}

export { CallContextProvider, useCall }
