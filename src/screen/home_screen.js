import React from 'react'
import { connect } from 'react-redux'
import { Button, TextField } from '@material-ui/core'


class HomeScreen extends React.Component {

	render() {
		return <div>
			<TextField />
			<Button
				variant='contained'
				color='primary'
				size='small'
				onClick={() => this.props.ADD_TODO('1')}>Save</Button>
			<h1>{this.props.counter}</h1>
		</div>

	}


}

const addTodo = (text) => ({
	type: 'ADD_TODO',
	text
})

export const homeReducers = (state = { counter: 0 }, action) => {
	console.log('homeReducers action', action.text)
	switch (action.type) {
		case 'ADD_TODO': return { ...state, counter: state.counter + parseInt(action.text) }
		default: return state
	}
}

const mapStateToProps = (state, ownProps) => {
	console.log('mapStateToProps ', state.homeReducers.counter)
	return {
		counter: state.homeReducers.counter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	console.log('mapDispatchToProps')
	return {
		'ADD_TODO': (text) => dispatch(addTodo(text))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);


