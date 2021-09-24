import styled, { css } from 'styled-components/native'
import Colors from '../constants/Colors'

export const Text = styled.Text`
  color: ${Colors.black};
  font-family: 'greycliff-regular';
  font-size: 18px;

  ${(props: any) =>
    props.centered &&
    css`
      text-align: center;
    `};
`

export const LargeText = styled(Text)`
  font-size: 24px;
`

export const SmallText = styled(Text)`
  font-size: 16px;
`

export const StrongText = styled(Text)`
  font-family: 'greycliff-medium';
`

export const Header = styled(Text)`
  font-family: 'greycliff-bold';
  font-size: 40px;
  color: ${Colors.black};
  text-align: center;
  padding: 0 16px;
  margin-top: 48px;
  text-transform: uppercase;
`

export const HeaderAlt = styled(StrongText)`
  font-size: 32px;
  text-align: center;
`
