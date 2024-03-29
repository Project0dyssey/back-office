import { Layout } from '@/components/Layout'
import type { AppProps } from 'next/app'
import "@/styles/globals.css";
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Layout children={<Component {...pageProps} />}/>
}