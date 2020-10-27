
import React, { useContext } from 'react'
import { AppContext } from './../../store/store'
import { Button } from '@material-ui/core'


const DetailScreen = () => {

    const { store, dispatch } = useContext(AppContext)

    return <div>
        <h1>Test: {store.counter}</h1>
        <Button
            variant='contained'
            color='primary'
            size='small'
            onClick={() => dispatch({
                'type': 'todo',
                'text': '1'
            })}>Test</Button>
    </div>
}

export default DetailScreen