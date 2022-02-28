const fetcher = async (url: string) => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}${url}`,
			{
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			}
		)

		const data = await response.json()

		if (response.ok) {
			return data
		}

		const error = new Error(response.statusText)
		throw error
	} catch (error) {
		return error
	}
}

export default fetcher
