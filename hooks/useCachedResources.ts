import { FontAwesome } from '@expo/vector-icons'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import * as React from 'react'

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync()

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'greycliff-bold': require('../assets/fonts/GreycliffCF-Bold.otf'),
          'greycliff-demibold': require('../assets/fonts/GreycliffCF-DemiBold.otf'),
          'greycliff-light': require('../assets/fonts/GreycliffCF-Light.otf'),
          'greycliff-medium': require('../assets/fonts/GreycliffCF-Medium.otf'),
          'greycliff-regular': require('../assets/fonts/GreycliffCF-Regular.otf'),
        })
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hideAsync()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}
