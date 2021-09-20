import styled, { css } from 'styled-components/native'
import Colors from '../constants/Colors'

export const Text = styled.Text`
  color: ${Colors.black};
  font-family: 'gamja-flower';
  font-size: 24px;

  ${(props: any) =>
    props.centered &&
    css`
      text-align: center;
    `};
`

export const LargeText = styled(Text)`
  font-size: 30px;
`

export const SmallText = styled(Text)`
  font-size: 18px;
`

export const StrongText = styled(Text)`
  font-family: 'gaegu-bold';
`

export const Header = styled(StrongText)`
  font-family: 'caveat-bold';
  font-size: 48px;
  color: ${Colors.white};
  text-align: center;
  padding: 0 5px;
  margin-top: 48px;
`

export const HeaderAlt = styled(StrongText)`
  font-size: 36px;
  text-align: center;
`
