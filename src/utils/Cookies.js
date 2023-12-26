// Set cookie
const setCookie = (userToken) => {
	const { user_code_validation } = userToken
	const userDataJSON = encodeURIComponent(user_code_validation)
	document.cookie = `userCognitToken=${userDataJSON}; path=/; expires=Wed, 01 Jan 2038 00:00:00 GMT; samesite=lax`
}

// Get cookie
const getCookieTkn = () => {
	const cookieValue = document.cookie

	if (!cookieValue) {
		return null
	}

	if (cookieValue) {
		const cookie = cookieValue
			.split('; ')
			.find(row => row.startsWith('userCognitToken='))
			.split('=')[1]

		return cookie
	}
}

export { getCookieTkn, setCookie }
