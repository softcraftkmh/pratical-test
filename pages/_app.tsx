import '../styles/globals.css'

import Modal from 'react-modal'
import { Provider } from 'react-redux'
import { SWRConfig, SWRConfiguration } from 'swr'

import Layout from '@/components/app/layout'
import store from '@/store/app/store'
import fetcher from '@/utils/fetcher'

import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps & SWRConfiguration) {
	return (
		<Provider store={store}>
			<SWRConfig
				value={{
					refreshInterval: 10000 * 60,
					shouldRetryOnError: false,
					fetcher,
				}}
			>
				<Layout>
					<Head>
						<title>Pokemon TCG Marketplace</title>
					</Head>
					<Component {...pageProps} />
				</Layout>
			</SWRConfig>
		</Provider>
	)
}

Modal.setAppElement('#__next')

export default MyApp
