import styled from 'styled-components/native'

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #4e4e4e;
`

export const Main = styled.View`
  flex: 1;
  padding: 32px 20px;
  gap: 12px;
`

export const Label = styled.Text`
  font-size: 16px;
  color: #000;
  margin-bottom: 4px;
`

export const Input = styled.TextInput`
  border: 1px solid #e7e7e7;
  border-radius: 4px;
  height: 52px;
  padding-left: 16px;
`

export const Button = styled.TouchableOpacity`
  position: absolute;
  bottom: 28px;
  right: 20px;
  left: 20px;
  background-color: #0914d6;
  border-radius: 4px;
  height: 52px;
  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  text-align: center;
`
