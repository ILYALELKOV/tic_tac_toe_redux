import { appReducer } from './reducer.js'

const createStore = (reducer) => {
	let state
	const listeners = []

	return {
		dispatch: (action) => {
			state = reducer(state, action)
			listeners.forEach((listener) => listener(state))
		},
		getState: () => state,
		subscribe: (listener) => {
			listeners.push(listener)

			return () => {
				const index = listeners.indexOf(listener)
				if (index !== -1) {
					listeners.splice(index, 1)
				}
			}
		}
	}
}

export const store = createStore(appReducer)

store.dispatch([])
