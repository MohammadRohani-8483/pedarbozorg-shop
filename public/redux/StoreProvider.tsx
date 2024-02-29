'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { store, AppStore } from './store'
// import { initializeCount } from './lib/features/counter/counterSlice'

export default function StoreProvider({
//   count,
  children,
}: {
//   count: number
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = store()
    // storeRef.current.dispatch(initializeCount(count))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}