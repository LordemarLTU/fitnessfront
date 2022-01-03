import '../styles/globals.css'
import '../styles/navStyles.module.css'
import '../styles/indexStyle.module.css'
import '../styles/contactStyle.module.css'
import '../styles/scheduleStyle.module.css'
import '../styles/loginStyle.module.css'
import '../styles/programsStyle.module.css'
import '../styles/registerStyle.module.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp 
