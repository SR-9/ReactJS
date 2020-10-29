import { makeStyles, Button, TextField, colors, IconButton, } from '@material-ui/core'
import React, { useState } from 'react'
import { VisibilityOutlined, VisibilityOffOutlined, PersonOutlined, LockOutlined, LockOpenOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: colors.grey[500],
        padding: 20,
        flexDirection: 'row'
    },

    textField: {
        margin: 8,
        width: 400,
        minWidth: '200',
    },
    loginButton: {
        width: 400,
        minWidth: '200',
        margin: 8,
    }
}))

const LoginScreen = ({ props }) => {

    const style = useStyles()

    const [isPassword, setIsPassword] = useState(true)
    const [username, setUsername] = useState('my username')
    const [password, setPassword] = useState('my password')
    const [loginStatus, setLoginStatus] = useState('')

    return (
        <div className='{style.root}'>
            <TextField
                variant='outlined'
                className={style.textField}
                label='Username'
                onChange={(text) => setUsername(text.target.value)}
                value={username}
                InputProps={{
                    startAdornment: <PersonOutlined />
                }}
            />
            <TextField
                variant='outlined'
                className={style.textField}
                type={isPassword ? 'password' : 'text'}
                label='Password'
                onChange={(text) => setPassword(text.target.value)}
                value={password}
                InputProps={{
                    endAdornment: <IconButton onClick={() => setIsPassword(!isPassword)}>
                        {isPassword ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
                    </IconButton>,
                    startAdornment: password.length === 0 ? <LockOutlined /> : <LockOpenOutlined />
                }}
            />
            <Button
                className={style.loginButton}
                variant='contained'
                color='primary'
                size='large'
                onClick={() => {
                    setLoginStatus(`${username} - ${password}`)
                }}>Login</Button>

            <h1>{loginStatus}</h1>
        </div>
    )
}

export default LoginScreen