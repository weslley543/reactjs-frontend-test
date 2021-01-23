import React from 'react'
import { Container, Content } from './styles';
import { ToastProvider } from '../../context/ToastContext'
import { useCall } from '../../context/CallContext';
import CallContainer from '../../components/CallContainer';
const App: React.FC = ()=>{
  const { userData, removeFromCall } = useCall();
  
  

  return (
    
    <Container>
      <Content>
      
        {userData.map(user=>
          <CallContainer removeFromCall={removeFromCall} id={user.id} key={user.id}/>
        )}
      </Content>
      <ToastProvider/>
    </Container>
    
  )
}

export default App; 