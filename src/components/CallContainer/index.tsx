import React, { useState } from 'react';
import { Container } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faTimes, faVideoSlash, faUserAltSlash } from '@fortawesome/free-solid-svg-icons'

interface CallContainerProps{
  id:string;
  removeFromCall(id:string):void;
}

const CallContainer : React.FC <CallContainerProps> = ({id, removeFromCall})=>{
  const [video, setVideo] = useState<boolean>(true);

  return(
    <Container>
      <div className="textContainer">
        <p>{id}</p>
      </div>
      {(video) ? (
        <iframe width="315" height="215" title={id} src="https://www.youtube.com/embed/mzJj5-lubeM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen={true}></iframe>) : 
          <div className="divSemVideo"><FontAwesomeIcon icon={faUserAltSlash} size='6x' color="white"/></div>
      }
      
     <div className="buttonContainer">
     <button title="Remover da chamada" onClick={()=>removeFromCall(id)} ><FontAwesomeIcon icon={faTimes} size='1x' color="gray"/></button>
  
      {
        (video) ? (<button title="Desativar Vídeo" onClick={()=>setVideo(!video)}><FontAwesomeIcon icon={faVideo} size='1x' color="gray"/></button>):
                  (<button title="Ativar Vídeo"  onClick={()=>setVideo(!video)}><FontAwesomeIcon icon={faVideoSlash} size='1x' color="red"/></button>)
      }
     </div>
      
    </Container>
   
  );
};

export default CallContainer;

