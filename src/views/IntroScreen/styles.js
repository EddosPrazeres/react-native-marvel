import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #0aa5e1;
`
export const ViewItem = styled.View`
  height: 80%;
  justify-content: flex-end;
  align-items: center;
`

export const ViewItemTitle = styled.Text`
  font-size: 21px;
  line-height: 0;
  letter-spacing: 0;
  color: white;
  text-align: center;
  
`

export const ViewItemSubtitle = styled.Text`
  font-size: 19px;
  color: #D5D5D5;
  text-align: center;
  margin-top: 16px;
  width: 254px;
`

export const Line = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  width: 254px;
  height: 50px;
`

export const Image = styled.Image`
  height: 200px;
  width: 200px;
  background-color: red;
  margin-bottom: 16px;
`

export const ButtonCircle = styled.View`
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, .2);
  border-radius: 20;
  justify-content: center;
  align-items: center;
`