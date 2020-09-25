import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";
import {AddCircle, PhotoCamera} from "@material-ui/icons";


const styles = (theme) => ({
    root: {
        width: '100%',
        maxWidth: 'sm',
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(0),
        paddingTop: theme.spacing(0),
        marginBottom: theme.spacing(0),
    },
    list: {
        width: '100%',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
        paddingLeft: theme.spacing(0),
        paddingRight: theme.spacing(0),
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(0),
    },
    container: {
        width: '100%',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,

    },
    fab: {
        margin: theme.spacing(2),
    },
    btn: {
        alignItems: 'center',
        paddingTop: theme.spacing(0),
        paddingBottom: theme.spacing(0),
        justifyContent: "center",
        display: 'block',
        textAlign: 'center',
    }
});

function togglePopup() {

}

function ProductCategories(props) {
    const {classes} = props;

    const images = [
        {
            url:
                'https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=400&q=80',
            title: 'Snorkeling',
            width: '40%',
        },
        {
            url:
                'https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400&q=80',
            title: 'Massage',
            width: '20%',
        },
        {
            url:
                'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80',
            title: 'Hiking',
            width: '40%',
        },
        {
            url:
                'https://images.unsplash.com/photo-1453747063559-36695c8771bd?auto=format&fit=crop&w=400&q=80',
            title: 'Tour',
            width: '38%',
        },
        {
            url:
                'https://images.unsplash.com/photo-1523309996740-d5315f9cc28b?auto=format&fit=crop&w=400&q=80',
            title: 'Gastronomy',
            width: '38%',
        },
        {
            url:
                'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=400&q=80',
            title: 'Shopping',
            width: '24%',
        },
        {
            url:
                'https://images.unsplash.com/photo-1506941433945-99a2aa4bd50a?auto=format&fit=crop&w=400&q=80',
            title: 'Walking',
            width: '40%',
        },
        {
            url:
                'https://images.unsplash.com/photo-1533727937480-da3a97967e95?auto=format&fit=crop&w=400&q=80',
            title: 'Fitness',
            width: '20%',
        },
        {
            url:
                'https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&w=400&q=80',
            title: 'Reading',
            width: '40%',
        },
    ];

    var a = {
        key: 1,
        sender: "a",
        areas: ["부산광역시 기장군", "서울특별시 강서구"],
        content: "기장군 3단계 준하는 사회적 거리두기 4원칙. 3. 10인 이상 모임 및 행사 참석 자제. 4. 다중이용시설 방문 자제.",
        date: "2020-09-03 11:26"
    };
    var b = {
        key: 2,
        sender: "b",
        areas: ["부산광역시 기장군", "서울특별시 강서구"],
        content: "기장군 3단계 준하는 사회적 거리두기 4원칙. 3. 10인 이상 모임 및 행사 참석 자제. 4. 다중이용시설 방문 자제.",
        date: "2020-09-03 11:26"
    };
    var c = {
        key: 3,
        sender: "c",
        areas: ["부산광역시 기장군", "서울특별시 강서구"],
        content: "기장군 3단계 준하는 사회적 거리두기 4원칙. 3. 10인 이상 모임 및 행사 참석 자제. 4. 다중이용시설 방문 자제.",
        date: "2020-09-03 11:26"
    };
    var d = {
        key: 4,
        sender: "d",
        areas: ["부산광역시 기장군", "서울특별시 강서구"],
        content: "기장군 3단계 준하는 사회적 거리두기 4원칙. 3. 10인 이상 모임 및 행사 참석 자제. 4. 다중이용시설 방문 자제.",
        date: "2020-09-03 11:26"
    };
    var e = {
        key: 5,
        sender: "e",
        areas: ["부산광역시 기장군", "서울특별시 강서구"],
        content: "기장군 3단계 준하는 사회적 거리두기 4원칙. 3. 10인 이상 모임 및 행사 참석 자제. 4. 다중이용시설 방문 자제.",
        date: "2020-09-03 11:26"
    };

    const db = [a, b, c, d, e];
    const [checked, setChecked] = React.useState(['location']); //init list
    const handleToggle = (value) => () => {
        //지역이 체크되었을때 보여지는 구현부
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
        console.log(newChecked);
    };

    return (
        <Container className={classes.root} >
            <List className={classes.container}>
                {db.map((data) => (
                    <ListItem className={classes.list}>
                        <ListItemIcon>
                            <LocationOnIcon/>
                        </ListItemIcon>
                        <ListItemText id={data.key} primary={data.sender}/>
                        <ListItemSecondaryAction>
                            <Switch
                                edge="end"
                                onChange={handleToggle(data.sender)}
                                checked={checked.indexOf(data.sender) !== -1}
                                color="primary"
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
                <ListItem style={{justifyContent:"center", alignItems:"center"}}>
                    <IconButton name="test" color="primary" className={classes.btn}>
                        <AddCircle />
                    </IconButton>
                </ListItem>
            </List>
        </Container>
    );
}

ProductCategories.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
