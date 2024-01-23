import styled from 'styled-components/native'

export const Header = styled.View`
  background-color: #f5f5f5;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 44px;
`

export const HeaderTitle = styled.Text`
  color: #4e4e4e;
  font-weight: 600;
  font-size: 14px;
`

export const SearchContainer = styled.View`
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #e7e7e7;
  height: 44px;
  margin: 20px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`

export const SearchInput = styled.TextInput`
  flex: 1;
  height: 44px;
`

export const ClientContainer = styled.View`
  flex: 1;
  background-color: #fff;
  flex-direction: column;
`

export const ClientAddButton = styled.TouchableOpacity`
  position: absolute;
  padding: 16px;
  border-radius: 100%;
  right: 20px;
  bottom: 20px;
  background-color: #0914d6;
`
