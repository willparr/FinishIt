import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface TodoItem {
  id: string
  title: string
  completed: boolean
  createdAt: number
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Metadata = Record<string, any>

const CACHE_KEY = 'app-cache'

// TODO setup a namespace API for the cache and allow the type to be passed in
// as generic when setting up the hook
export interface Cache {
  todos?: Record<string, TodoItem>
}

type SetCache = (cache: Cache) => void

interface CacheContextValue {
  cache: Cache
  setCache: SetCache
}

export const CacheContext = createContext({
  cache: {},
  setCache: () => null,
} as CacheContextValue)

export function useCache(): CacheContextValue {
  const { cache, setCache } = useContext(CacheContext)

  return {
    cache,
    setCache,
  }
}

interface CacheProviderProps {
  children: React.ReactNode
}

export function CacheProvider(props: CacheProviderProps): JSX.Element {
  const { children } = props

  // const [rehydrating, setRehydrating] = useState(true)
  const [cache, setCache] = useState({})

  // useEffect(() => {
  //   rehydrateCache()
  // }, [])

  // useEffect(() => {
  //   writeCacheToLocalStorage({ data: cache })
  // }, [cache])

  function handleSetCache(data: Cache) {
    // if (rehydrating) {
    //   console.warn('🚨 Cache - Cannot set cache while rehydrating!')
    //   return
    // }

    setCache({ ...data })
  }

  async function rehydrateCache() {
    console.debug('Cache - ️rehydrating...')
    const localStorageCache = (await readCacheFromLocalStorage()) as Cache
    setCache(localStorageCache)
    setRehydrating(false)
    console.debug('Cache - rehydrated!')
  }

  return (
    <CacheContext.Provider value={{ cache, setCache: handleSetCache }}>
      {children}
    </CacheContext.Provider>
  )
}

async function writeCacheToLocalStorage({
  data,
}: {
  data: Cache
}): Promise<void> {
  if (!data) return

  const cacheJson = JSON.stringify(data)

  await AsyncStorage.setItem(CACHE_KEY, cacheJson)
}

async function readCacheFromLocalStorage(): Promise<unknown> {
  const cacheJson = await AsyncStorage.getItem(CACHE_KEY)

  if (!cacheJson) return {}

  const parsedCache = JSON.parse(cacheJson)

  if (typeof parsedCache !== 'object') {
    console.warn(
      'Cache is not plain object, not returning to avoid strange side effects',
    )
    return {}
  }

  return parsedCache
}
