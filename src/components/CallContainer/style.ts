import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: space-around;
  
  width:350px;
  height:250px;
  border-radius:4px;
  background-color: #394263;
  margin-bottom:20px;
  margin-right:10px;
  -webkit-column-break-inside: avoid;
  box-sizing: border-box;
  .divSemVideo {
    display:flex;
    position:relative;
    width:315px;
    height:215px;
    background-color:black;
    align-self:center;
    justify-content:center;
    align-items:center;
  }
  iframe {
    align-self:center;
  }
  .textContainer {
    display:flex;
    justify-content:center;
    p {
      font-size:12px;
      color:#fafafa;
      text-align: center;
    }
  }
  .buttonContainer {
    display:flex;
    justify-content:center;
    button {
      height:45px;
      width:45px;
      border-radius:100%;
      border-width: thin;
      border-color:black solid;
      transition: background-color 0.2s;
      &:hover { 
        background: ${shade(0.2, '#FFF')};
      }
  }
  
}
`;