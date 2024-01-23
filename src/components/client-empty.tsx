import { Text } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

export default function ClientEmpty() {
  return (
    <Container>
      <Text>Nenhum cliente cadastrado</Text>
    </Container>
  )
}
