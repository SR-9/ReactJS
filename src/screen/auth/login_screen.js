import { makeStyles, Button, TextField, colors, IconButton, Grid, Rows } from '@material-ui/core'
import React, { useState } from 'react'
import { VisibilityOutlined, VisibilityOffOutlined, PersonOutlined, LockOutlined, LockOpenOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: colors.grey[200]
    },

    textField: {
        margin: 8,
        width: '100%',
    },
    loginButton: {
        width: '100%',
        margin: 8,
    }
}))

const LoginScreen = ({ props }) => {

    const style = useStyles()

    const [isPassword, setIsPassword] = useState(true)
    const [username, setUsername] = useState('my username1')
    const [password, setPassword] = useState('my password')
    const [loginStatus, setLoginStatus] = useState('')

    return (
        <div className={style.root}>
            <Grid container direction="column" justify="center" alignItems="center" >
                <Grid container direction="column" xs={2} md={3} xl={4} justify="center" alignItems="center" ></Grid>
                <Grid container direction="column" xs={8} md={6} xl={4} justify="center" alignItems="center" >
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
                </Grid>
            </Grid>
        </div>
    )
}

export default LoginScreen