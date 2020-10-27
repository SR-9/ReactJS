
import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Toolbar, Typography, AppBar, IconButton,  } from '@material-ui/core'
import { MenuRounded,  } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const TopBar = ({ menuClick, loginClick }) => {
    const classes = useStyles();
    return <AppBar position="static">
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton} onClick={menuClick} >
                <MenuRounded />
            </IconButton>
            <Typography variant="h6" className={classes.title} align='left'>News</Typography>
            <Button color="inherit" edge="end" onClick={loginClick}>Login</Button>
        </Toolbar>
    </AppBar>
}

export { TopBar }

