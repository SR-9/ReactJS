import React, { useReducer } from 'react'
import { Button, TextField } from '@material-ui/core'
import { TopBar } from './../../component/top_bar'
import { addTodo } from './home_action'
import { homeReducers } from './home_reducer'


const HomeScreen =() => {
	const [store, dispatch] = useReducer(homeReducers, { counter : 0 }) 
	return <div>
		<TopBar
			menuClick = { () => console.log('todo something menu') }
			loginClick = { () => console.log('todo login')}
			/>
		<TextField />
		<Button
			variant='contained'
			color='primary'
			size='small'
			onClick={() => dispatch(addTodo('1'))}>Save</Button>
		<h1>{store.counter}</h1>
	</div>
}

export default HomeScreen

