const validateAge = (input) => {
	const today = new Date()
	const birthDateArray = input.split('-')
	const birthDateObject = new Date(birthDateArray[0], birthDateArray[1], birthDateArray[2])
	let age = today.getFullYear() - birthDateObject.getFullYear()
	const month = today.getMonth() - birthDateObject.getMonth()
	if (month < 0 || (month === 0 && today.getDate() < birthDateObject.getDate())) {
		age--
	}

	return age
}

export default validateAge