import { makeStyles, Button, TextField, colors, IconButton, Grid, Rows } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { VisibilityOutlined, VisibilityOffOutlined, PersonOutlined, LockOutlined, LockOpenOutlined } from '@material-ui/icons';
import LoginPresenter from './login'


const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 100,
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



const loginPresenter = new LoginPresenter()

const LoginScreen = ({ props }) => {

    const style = useStyles()

    const [isPassword, setIsPassword] = useState(true)
    const [username, setUsername] = useState('test@user.com')
    const [password, setPassword] = useState('12345')
    const [loginStatus, setLoginStatus] = useState(0)


    useEffect( () => {
        console.log('12313131231321231')
        loginPresenter.login(username, password)
     }, [loginStatus])

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
                            setLoginStatus(loginStatus + 1)
                        }}>Login</Button>

                    <h1>{loginStatus}</h1>
                </Grid>
            </Grid>
        </div>
    )
}

export default LoginScreen