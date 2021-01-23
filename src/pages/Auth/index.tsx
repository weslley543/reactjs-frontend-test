import React, { useCallback } from 'react';
import { Container, Content } from './styles';
import { useAuth } from '../../context/AuthContext';


const Auth: React.FC = ()=>{
  
  const { signIn, nome } = useAuth();

  const handleSubmit = useCallback((event:  React.FormEvent)=>{
    event.preventDefault();
    signIn();
  }, [signIn])
  
  return (
    <Container>
      <Content>
        <form onSubmit={ handleSubmit }>
            <p>OLÁ {nome}, BEM VINDO A REUNIÃO</p>
            <p>CLIQUE NO BOTÃO PARA ACESSAR</p>
            <button type="submit">ENTRAR</button>
        </form>
      </Content>
    </Container>
  )
};

export default Auth;