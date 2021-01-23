import React from 'react';
import GlobalStyle from './styles/global';
import { AuthProvider } from './context/AuthContext';
import { CallContextProvider } from './context/CallContext';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes'



const App : React.FC = () => {
  return (
   <Router>
   <AuthProvider>
    <CallContextProvider>
      <Routes/> 
     </CallContextProvider>
   </AuthProvider>  
    <GlobalStyle/>
   </Router>
  );
}

export default App;
