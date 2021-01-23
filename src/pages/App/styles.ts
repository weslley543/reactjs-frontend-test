import styled from 'styled-components';
import { shade } from 'polished'

export const Container = styled.div`
  display:flex;
  .containerExit {
    display:flex;
    button {
      background-color:#3700B3;
      width:75px;
      height:45px;
      color:white;
      border-radius:4px;
      border-width: thin;
      font-weight: bold;
      transition: background-color 0.2s;
      &:hover { 
        background: ${shade(0.2, '#5600E8')};
      }
    }
  }
`;

export const Content = styled.div`
  width: 150vh;
  min-height: 100vh;
  background-color: rgba(0,0,0,0.09);
  postion:relative;
  display flex;
  flex-wrap:wrap;
`;
