import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin: 80px auto 0;
  max-width: 450px;
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  background: #FFF;
  margin-top: 50px ;
  border-radius: 4px;
  padding: 30px;
  form > p{
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 30px;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  button {
    margin-top:45px;
    border:0;
    border-radius: 2px;
    width: 100%;
    height: 42px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: bold;
    background: #5600E8;
    color : #fafafa;
    border-width: thin;
    transition: background-color 0.2s;
    &:hover { 
      background: ${shade(0.2, '#5600E8')};
    }
  }
`;