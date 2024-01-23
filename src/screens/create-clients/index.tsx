import Header from '@/components/header'
import { useState } from 'react'
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import { AppDispatch } from '@/redux'
import { useAppDispatch } from '@/redux/hooks'
import { Client } from '@/types'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  Button,
  ButtonText,
  Input,
  Label,
  Main,
  Title,
} from './styles'

const formatCpf = (value: string) => {
  value = value.replace(/(\d{3})(\d)/, '$1.$2')
  value = value.replace(/(\d{3})(\d)/, '$1.$2')
  value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2')

  return value
}

const saveClient = async (client: Client) => {
  const clients = await AsyncStorage.getItem('@clients')

  if (clients) {
    const parsedClients = JSON.parse(clients)

    parsedClients.push(client)

    await AsyncStorage.setItem(
      '@clients',
      JSON.stringify(parsedClients)
    )

    return
  }

  await AsyncStorage.setItem(
    '@clients',
    JSON.stringify([client])
  )
}

export default function CreateClientsScreen({
  navigation,
}: any) {
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [cpfInvalid, setCpfInvalid] = useState(true)
  const dispatch: AppDispatch = useAppDispatch()

  const handleCpfChange = (value: string) => {
    setCpfInvalid(true)
    value = value.replace(/\D/g, '')

    value = formatCpf(value)

    if (value.length === 14) {
      setCpfInvalid(false)
    }

    setCpf(value)
  }

  const handleSubmit = async () => {
    if (cpfInvalid) {
      return
    }

    if (!name || !cpf) {
      Alert.alert(
        'Atenção!',
        'Preencha todos os campos para continuar!'
      )

      return
    }

    const clients = await AsyncStorage.getItem('@clients')

    if (clients) {
      const parsedClients = JSON.parse(clients)

      const clientExists = parsedClients.find(
        (client: Client) => client.cpf === cpf
      )

      if (clientExists) {
        Alert.alert(
          'Atenção!',
          'Esse cliente já está cadastrado!'
        )

        return
      }
    }

    await saveClient({
      nome: name,
      cpf: cpf,
    })

    dispatch({
      type: 'clients/ADD_CLIENT',
      payload: {
        nome: name,
        cpf: cpf,
      },
    })
    navigation.navigate('Client')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior='padding'
        style={{ flex: 1, backgroundColor: '#fff' }}
      >
        <Header withButton title='Criar Clientes' />

        <Main>
          <Title>Informações do cliente</Title>

          <View>
            <Label>Nome</Label>

            <Input
              value={name}
              onChangeText={setName}
              placeholder='Digite o nome ou razão social'
            />
          </View>

          <View>
            <Label>CPF</Label>

            <Input
              value={cpf}
              onChangeText={handleCpfChange}
              maxLength={14}
              placeholder='000.000.000-00'
              keyboardType='numeric'
              selectTextOnFocus
            />
          </View>

          <Button
            style={{
              opacity: cpfInvalid ? 0.5 : 1,
            }}
            disabled={cpfInvalid}
            onPress={handleSubmit}
          >
            <ButtonText>Cadastrar</ButtonText>
          </Button>
        </Main>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
