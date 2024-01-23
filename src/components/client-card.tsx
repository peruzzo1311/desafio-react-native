import { Client } from '@/types'
import { FontAwesome6 } from '@expo/vector-icons'
import { View } from 'react-native'
import styled from 'styled-components/native'

const Card = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  align-items: center;
  gap: 8px;
`

const Title = styled.Text`
  font-size: 14px;
  color: #4e4e4e;
`

const SubTitle = styled.Text`
  font-size: 12px;
  color: #4e4e4e7b;
`

interface ClientCardProps {
  item: Client
}

export default function ClientCard({
  item,
}: ClientCardProps) {
  return (
    <Card>
      <FontAwesome6
        name='circle-user'
        size={40}
        color='#e7e7e7'
      />

      <View>
        <Title>{item.nome}</Title>

        <SubTitle>{item.cpf}</SubTitle>
      </View>
    </Card>
  )
}
