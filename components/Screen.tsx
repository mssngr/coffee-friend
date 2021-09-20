import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import caret from '../assets/images/caret-darkGray.png'
import Colors from '../constants/Colors'
import { Header, Text } from '../components/styled'
import Button from '../components/Button'

/* STYLES */
const ScreenContainer = styled.View`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 45px 0;
  background-color: ${Colors.lightGray};
`

const Caret = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 5px;
  transform: rotate(-90deg);
`

const BackButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  position: absolute;
  top: 48px;
  left: 0;
`

const BackText = styled(Text)`
  color: ${Colors.darkGray};
`

const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Spacer = styled.View`
  width: 15px;
  height: 100%;
`

const ActionButton = styled(Button)`
  min-width: 35%;
`

/* PRESENTATION/LOGIC */
class Screen extends React.Component<any> {
  static propTypes = {
    hasBack: PropTypes.bool,
    header: PropTypes.string,
    next: PropTypes.shape({
      screen: PropTypes.string,
      onPress: PropTypes.func,
      text: PropTypes.string.isRequired,
    }),
    otherButton: PropTypes.shape({
      screen: PropTypes.string,
      onPress: PropTypes.func,
      text: PropTypes.string.isRequired,
      isNotOutline: PropTypes.bool,
    }),
    navigation: PropTypes.object,
    children: PropTypes.node.isRequired,
  }

  handleBack = () => {
    this.props.navigation.goBack()
  }

  handleNext = (next: any) => () => {
    if (next.onPress) {
      next.onPress()
    }
    if (next.screen) {
      this.props.navigation.navigate(next.screen)
    }
  }

  render() {
    const { hasBack, header, next, otherButton, children } = this.props
    return (
      <ScreenContainer>
        {hasBack && (
          <BackButton onPress={this.handleBack}>
            <Caret source={caret as any} />
            <BackText>Back</BackText>
          </BackButton>
        )}
        {header && <Header>{header}</Header>}
        {children}
        {(otherButton || next) && (
          <ButtonsContainer>
            {otherButton && (
              <ActionButton
                onPress={this.handleNext(otherButton)}
                outline={otherButton && !otherButton.isNotOutline}
              >
                {otherButton && otherButton.text}
              </ActionButton>
            )}
            {otherButton && next && <Spacer />}
            {next && (
              <ActionButton onPress={this.handleNext(next)}>
                {next && next.text}
              </ActionButton>
            )}
          </ButtonsContainer>
        )}
      </ScreenContainer>
    )
  }
}

export default Screen
