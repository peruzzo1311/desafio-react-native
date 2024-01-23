import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styled from 'styled-components/native'

export const Container = styled(KeyboardAwareScrollView)`
  flex: 1;
  background-color: #fff;
`
export const ImageContainer = styled.View`
  align-items: center;
  margin-top: 90px;
  margin-bottom: 90px;
`

export const FormContainer = styled.View`
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  gap: 16px;
  align-self: center;
`

export const FormTitle = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #4e4e4e;
  margin-bottom: 4px;
`

export const FormInput = styled.TextInput`
  border: 1px solid #e7e7e7;
  border-radius: 4px;
  height: 52px;
  padding-left: 16px;
`

export const FormInputPasswordContainer = styled.View`
  border: 1px solid #e7e7e7;
  border-radius: 4px;
  height: 52px;
  padding-left: 16px;
  padding-right: 8px;
  flex-direction: row;
  align-items: center;
`

export const FormInputPassword = styled.TextInput`
  flex: 1;
  height: 52px;
`

export const FormButton = styled.TouchableOpacity`
  background-color: #0914d6;
  border-radius: 4px;
  height: 52px;
  align-items: center;
  justify-content: center;
`

export const FormButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`
