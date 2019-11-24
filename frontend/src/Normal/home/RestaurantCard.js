import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
    card: {
        width: 235,
        border: "1px solid #9E9E9E",
        margin: "10px",
        height: "300px"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function RestaurantCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const {
        data
    } = props;

    console.log(data);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        {/* <MoreVertIcon /> */}
                    </IconButton>
                }
                title={data.Name}
                subheader={data.Type}
            />
            <CardMedia
                className={classes.media}
                image={`/uploads/${data.Image}`}
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {data.Address}
                </Typography>
            </CardContent>
            {/* <CardActions disableSpacing>
                <Icon aria-label="add to favorites">
                    favorite
                </Icon>
            </CardActions> */}
        </Card>
    );
}