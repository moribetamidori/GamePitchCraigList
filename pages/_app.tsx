import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import FirebaseProvider from '../lib/authContext'
import '../lib/firebaseConfig/init'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'




function MyApp({ Component, pageProps }: AppProps) {
  return   <FirebaseProvider>
      <Layout> 
      <Component {...pageProps} />
  </Layout>
  </FirebaseProvider>
    // <ChakraProvider>

  {/* </ChakraProvider> */}
}
export default MyApp
