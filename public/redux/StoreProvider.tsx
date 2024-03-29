'use client'
import { useRef } from 'react'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { store, AppStore } from './store'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = store()
  }

  return <Provider store={storeRef.current}>
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{ duration: 3000 }}
    />
    {children}
  </Provider>
}