import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { CacheProvider, useCache } from './hooks/useCache'
import useCachedResources from './hooks/useCachedResources'
import Navigation from './navigation'

export default function App(): JSX.Element | null {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <CacheProvider>
        <SafeAreaProvider>
          <Navigation colorScheme={'light'} />
          <StatusBar />
        </SafeAreaProvider>
      </CacheProvider>
    )
  }
}
