import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  postion: relative;
  right:0;
  margin-top:20px;
`;


export const Toast = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin-top:10px;
  width:315px;
  div {
    flex: 1;
    justify-content:center;
    p{
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      color:#3700B3;
    }
    .buttonContainer {
      display:flex;
      flex:1;
      
      justify-content:space-around;
      button {
        position: absulute;
        top:15px;
        right:8px;
        width:45px;
        height:45px;
        background-color:white;
        border-radius:45px;
        transition: background-color 0.2s;
        border-width:1px;
        &:hover { 
          background: ${shade(0.2, '#FFF')};
        }
      }
    }
  }
`;