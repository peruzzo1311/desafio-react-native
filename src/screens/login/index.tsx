import { Entypo } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'
import {
  Alert,
  Image,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'

import { AppDispatch } from '@/redux'
import { useAppDispatch } from '@/redux/hooks'
import {
  Container,
  FormButton,
  FormButtonText,
  FormContainer,
  FormInput,
  FormInputPassword,
  FormInputPasswordContainer,
  FormTitle,
  ImageContainer,
} from './styles'

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const dispatch: AppDispatch = useAppDispatch()

  const toggleShowPassword = () =>
    setShowPassword(!showPassword)

  const handleSubmit = async () => {
    setIsLoading(true)

    if (!email || !password) {
      Alert.alert(
        'Atenção!',
        'Preencha todos os campos para continuar!'
      )

      setIsLoading(false)
      return
    }

    if (email !== 'admin' || password !== 'admin') {
      Alert.alert('Atenção!', 'E-mail ou senha incorretos!')

      setIsLoading(false)
      return
    }

    const clients = await AsyncStorage.getItem('@clients')

    if (clients) {
      dispatch({
        type: 'clients/SET_CLIENTS',
        payload: JSON.parse(clients),
      })
    }

    setIsLoading(false)
    navigation.replace('Client')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container
        enableOnAndroid
        extraScrollHeight={100}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={false}
      >
        <ImageContainer>
          <Image
            source={require('@/assets/images/logo.png')}
          />
        </ImageContainer>

        <FormTitle>Acesse sua conta</FormTitle>

        <FormContainer>
          <FormInput
            onChangeText={setEmail}
            placeholder='Digite seu e-mail'
          />

          <FormInputPasswordContainer>
            <FormInputPassword
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              placeholder='Digite sua senha'
            />

            <TouchableOpacity onPress={toggleShowPassword}>
              <Entypo
                name={
                  showPassword ? 'eye' : 'eye-with-line'
                }
                size={24}
                color='#0914D6'
              />
            </TouchableOpacity>
          </FormInputPasswordContainer>

          <FormButton
            onPress={handleSubmit}
            disabled={isLoading}
            style={{
              opacity: isLoading ? 0.5 : 1,
            }}
          >
            <FormButtonText>
              {isLoading ? 'Entrando...' : 'Entrar'}
            </FormButtonText>
          </FormButton>
        </FormContainer>
      </Container>
    </TouchableWithoutFeedback>
  )
}
