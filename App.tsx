import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import reducer from './state/reducers'

// Create the redux store with the devtools enhancer
const store = createStore(reducer)

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <Navigation colorScheme={colorScheme} />
        </Provider>
        <StatusBar />
      </SafeAreaProvider>
    )
  }
}
