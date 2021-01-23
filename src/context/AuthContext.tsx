import React, { createContext, useCallback, useState, useContext } from 'react';
import { v4 } from 'uuid';

interface AuthState {
  token:object;
  nome:string;
};
interface AuthContextData {
  nome:string;
  signIn(): void;
  signOut():void;
};
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) =>{
  const [data, setData] = useState<AuthState>(() =>{
    const token = localStorage.getItem('@Eventials:token');
    if(token){
      return {token: JSON.parse(token), nome:"Weslley"}
    }
    return {} as AuthState;
    
  });
  const signOut = useCallback(()=>{
    localStorage.removeItem('@Eventials:token');
    setData({} as AuthState);
  }, [])
  const signIn = useCallback(() => {
    
    const token = { auth:v4() }
    localStorage.setItem('@Eventials:token', JSON.stringify(token));
    setData({ token, nome:"Weslley" })
  }, [])
  return (
  
    <AuthContext.Provider value ={{ signIn, nome:data.nome, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}; 

function useAuth(): AuthContextData {
  const context = useContext(AuthContext)
  if(!context){
    throw new Error('Contexto não foi criado')
  }
  return context;
}
export { AuthProvider,  useAuth}