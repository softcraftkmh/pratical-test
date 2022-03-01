import '../styles/globals.css'

import Modal from 'react-modal'
import { Provider } from 'react-redux'
import { SWRConfig } from 'swr'

import Layout from '@/components/app/layout'
import store from '@/store/app/store'
import fetcher from '@/utils/fetcher'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<SWRConfig
				value={{
					refreshInterval: 10000 * 60,
					fetcher,
				}}
			>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SWRConfig>
		</Provider>
	)
}

Modal.setAppElement('#__next')

export default MyApp
