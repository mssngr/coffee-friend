import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
// import { get } from 'lodash'
import figure1 from '../assets/images/figure1.png'
import figure2 from '../assets/images/figure2.png'
import figure3 from '../assets/images/figure3.png'
import figure4 from '../assets/images/figure4.png'
import plus from '../assets/images/plus.png'
import minus from '../assets/images/minus.png'
import { convertNumToText } from '../utils/functions'
import Selectors from '../state/selectors'
import Actions from '../state/actions'
import { HeaderAlt } from '../components/styled'
import Screen from '../components/Screen'

/* QUERIES */
// const findUser = (userId: any) => `{
//   User(id: "${userId}") {
//     id
//     favoriteCafeIds
//     favoriteRecipes
//   }
// }`

// const addUser = `mutation {
//   createUser(
//     favoriteCafeIds: [],
//     favoriteRecipes: []
//   ) {
//     id
//     favoriteCafeIds
//     favoriteRecipes
//   }
// }`

/* STYLES */
const FlexContainer = styled.View`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`

const IllustrationContainer = styled(FlexContainer)`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`

const FiguresContainer = styled(FlexContainer)`
  flex-direction: row;
  width: 60%;
`

const FigureImage = styled.Image`
  width: 40px;
  height: 120px;
`

const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100px;
`

const OperatorImage = styled.Image`
  width: 30px;
  height: 30px;
`

/* PRESENTATION/LOGIC */
class Servings extends React.Component<any> {
  static navigationOptions = {
    title: 'Servings',
    header: null,
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    servings: PropTypes.number.isRequired,
    changeServings: PropTypes.func.isRequired,
    userId: PropTypes.string,
    updateUser: PropTypes.func.isRequired,
  }

  componentDidMount() {
    console.log('App mounted, first screen loaded.')
    // const { userId, updateUser } = this.props
    // // Try to fetch the user from the server, if there is one
    // graphcoolRequest(findUser(userId))
    //   .then((response) => {
    //     const foundUser = get(response, 'User')
    //     if (foundUser) {
    //       console.log(`Found user ${foundUser.id}.`)
    //       // If a user was found, update redux with the user data
    //       updateUser(foundUser)
    //     } else {
    //       // If there is no user, create one
    //       graphcoolRequest(addUser)
    //         .then((response) => {
    //           const newUser = get(response, 'createUser')
    //           if (newUser) {
    //             console.log(`Created user ${newUser.id}.`)
    //             // Then update redux with the user data
    //             updateUser(newUser)
    //           }
    //         })
    //         .catch((err) =>
    //           console.log(new Error(`Could not create user. ${err}`))
    //         )
    //     }
    //   })
    //   .catch((err) =>
    //     console.log(new Error(`Could not complete user lookup. ${err}`))
    //   )
  }

  handleDecrementServings = () => {
    const { servings, changeServings } = this.props
    if (servings > 1) {
      changeServings(servings - 1)
    }
  }

  handleIncrementServings = () => {
    const { servings, changeServings } = this.props
    if (servings < 4) {
      changeServings(servings + 1)
    }
  }

  handlePress = () => {
    this.props.navigation.navigate('Size')
  }

  render() {
    const { navigation, servings } = this.props
    console.log(servings)
    return (
      <Screen
        header="Choose your servings"
        otherButton={{ screen: 'Cafes', text: 'Feeling Lazy' }}
        next={{ screen: 'Size', text: 'Continue' }}
        navigation={navigation}
      >
        <FlexContainer>
          <HeaderAlt>Coffee for {convertNumToText(servings)}</HeaderAlt>
          <IllustrationContainer>
            <Button onPress={this.handleDecrementServings}>
              <OperatorImage source={minus as any} />
            </Button>
            <FiguresContainer>
              {servings >= 1 && <FigureImage source={figure1 as any} />}
              {servings >= 2 && <FigureImage source={figure2 as any} />}
              {servings >= 3 && <FigureImage source={figure3 as any} />}
              {servings >= 4 && <FigureImage source={figure4 as any} />}
            </FiguresContainer>
            <Button onPress={this.handleIncrementServings}>
              <OperatorImage source={plus as any} />
            </Button>
          </IllustrationContainer>
        </FlexContainer>
      </Screen>
    )
  }
}

const mapState = (state: any) => ({
  userId: Selectors.getUserId(state),
  servings: Selectors.getCurrentServings(state),
})

const mapActions = {
  changeServings: Actions.changeServings,
  updateUser: Actions.updateUser,
}

export default connect(mapState, mapActions)(Servings)
