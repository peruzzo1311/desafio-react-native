import { Feather, FontAwesome } from '@expo/vector-icons'
import {
  ClientAddButton,
  ClientContainer,
  SearchContainer,
  SearchInput,
} from './styles'

import { Client } from '@/types'

import ClientCard from '@/components/client-card'
import ClientEmpty from '@/components/client-empty'
import Header from '@/components/header'
import Separator from '@/components/separator'
import { useAppSelector } from '@/redux/hooks'
import { useCallback, useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'

export default function ClientScreen({ navigation }: any) {
  const [clientFiltered, setClientFiltered] = useState<
    Client[]
  >([])

  const arrayClients = useAppSelector(state => state.client)

  const getCLients = useCallback(async () => {
    setClientFiltered(arrayClients)
  }, [arrayClients])

  const handleSearch = (value: string) => {
    const data = arrayClients.filter(
      client =>
        client.nome.includes(value) ||
        client.cpf.includes(value)
    )

    setClientFiltered(data)
  }

  const renderItem = ({ item }: { item: Client }) => (
    <ClientCard item={item} />
  )

  useEffect(() => {
    getCLients()
  }, [getCLients])

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header title='Clientes' />

      <SearchContainer>
        <FontAwesome
          name='search'
          size={20}
          color='#4e4e4e'
        />

        <SearchInput
          onChangeText={handleSearch}
          placeholder='Pesquisar'
        />
      </SearchContainer>

      <ClientContainer>
        <FlatList
          data={clientFiltered}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <Separator />}
          keyExtractor={item => item.cpf}
          ListEmptyComponent={() => <ClientEmpty />}
        />
      </ClientContainer>

      <ClientAddButton
        onPress={() => navigation.navigate('CreateClients')}
      >
        <Feather name='plus' size={40} color='#fff' />
      </ClientAddButton>
    </View>
  )
}
