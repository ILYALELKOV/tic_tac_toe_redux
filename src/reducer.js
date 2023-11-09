export const initialState = Array(9).fill('')

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case 'NEW_GAME': {
			return Array(9).fill('')
		}
		case 'CURRENT_BOARD': {
			return payload
		}
		default:
			return state
	}
}
