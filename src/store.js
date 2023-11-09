import { appReducer } from './reducer.js'

const createStore = (reducer) => {
	let state

	return {
		dispatch: (action) => {
			state = reducer(state, action)
		},
		getState: () => state
	}
}

export const store = createStore(appReducer)

store.dispatch([])
