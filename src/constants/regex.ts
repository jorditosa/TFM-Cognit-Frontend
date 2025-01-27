export const Regex = {
	EMAIL: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
	CITY: /^[a-zA-Z\s]*$/,
	PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
	NAME: /^[a-zA-Z\s]*$/,
	CODE_VALIDATION: /^[A-Za-z0-9]{6}/
}