import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'

export const HeaderContainer = styled.View`
  flex-direction: row;
  padding: 0 16px;
  align-items: center;
  height: 44px;
  background-color: #f5f5f5;
`

export const HeaderButton = styled.TouchableOpacity`
  padding: 0 12px;
  height: 44px;
  justify-content: center;
`

export const HeaderTitle = styled.Text`
  flex: 1;
  text-align: center;
  margin-left: -24px;
  color: #4e4e4e;
  font-weight: 600;
  font-size: 14px;
`

interface HeaderProps {
  withButton?: boolean
  title: string
}

export default function Header({
  withButton = false,
  title,
}: HeaderProps) {
  const navigation = useNavigation()

  return (
    <HeaderContainer>
      {withButton && (
        <HeaderButton onPress={() => navigation.goBack()}>
          <Entypo
            name='chevron-left'
            size={24}
            color='#0914d6'
          />
        </HeaderButton>
      )}

      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  )
}
