import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles} from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import Typography from "../components/Typography";

function timeForToday(value) {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
    if (betweenTime < 1) return '방금전';
    if (betweenTime < 60) {
        return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
        return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
        return `${betweenTimeDay}일전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년전`;
}

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        width: 'auto',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
        paddingLeft: theme.spacing(0),
        paddingRight: theme.spacing(0),
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
    },
    container: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(15),
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 5),
    },
    title: {
        marginBottom: theme.spacing(14),
    },
    number: {
        fontSize: 24,
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.secondary.main,
        fontWeight: theme.typography.fontWeightMedium,
    },
    image: {
        height: 55,
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
    curvyLines: {
        pointerEvents: 'none',
        position: 'absolute',
        top: -180,
        opacity: 0.7,
    },
    button: {
        marginTop: theme.spacing(8),
    },
    date: {
        textAlign: 'right',
        display: 'inline',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(0),
    },
    outDate: {
        width: '100%',
        backgroundColor: 'red',
    },
    time: {
        display:'inline-block',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(0),
    }
});

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
        paddingLeft: theme.spacing(0),
        paddingRight: theme.spacing(0),
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
    },
    inline: {
        display: 'inline',
        textAlign: 'right',
    },
}));

function Message(obj) {
    const classes = useStyles();
    const selected = obj.selected;
    const checked = obj.checked;
    const db = obj.db;
    if (checked.length === 0) {
        return (<div></div>);
    }
    console.log(typeof db);
    let queue = [];
    for (let i = 0; i < checked.length; i++) {
        db.map(data => {
            if (data.regions.indexOf(checked[i]) !== -1) {
                queue.unshift(data);
            }
        });
        queue.sort((a, b) => { // 내림차순
            return a.timestamp < b.timestamp ? 1 : a.timestamp > b.timestamp ? -1 : 0;
        });
    }
    return (
        <Container className={classes.root}>
            {
                queue.map((data) => (
                    <ListItem alignItems="flex-start" className={classes.root}>
                        <ListItemAvatar>
                            <Avatar alt={data.sender}>
                                <EmailIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                    <span>{data.sender}
                                        <Typography variant="caption" align="right" >
                                            &nbsp;{timeForToday(data.timestamp)}
                                        </Typography>
                                    </span>
                            }
                            secondary={
                                <React.Fragment>
                                    {/*<Typography*/}
                                    {/*    component="span"*/}
                                    {/*    variant="body2"*/}
                                    {/*    className={classes.inline}*/}
                                    {/*    color="textPrimary"*/}
                                    {/*>*/}
                                    {/*    test bold text*/}
                                    {/*</Typography>*/}
                                    {data.content}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                ))}

        </Container>
    );
}

Message.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Message);
