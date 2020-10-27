
export const homeReducers = (state = { counter: 0 }, action) => {
	console.log('homeReducers action', action.text)
	switch (action.type) {
		case 'ADD_TODO': return { ...state, counter: state.counter + parseInt(action.text) }
		default: return state
	}
}
