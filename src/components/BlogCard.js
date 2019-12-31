import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import * as URL from '../utils/url';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    width: '100%',
    margin: "1vh"
  },
  details: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  }
}));

export default function BlogCard(props) {
    const classes = useStyles();
    const item = props.blog;
    const cid = props.categoryId;
    const date = new Date(item.timestamp * 1000);
    const calendarDate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    return (
        <Card className={classes.card}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        <a href={`/?cid=${cid}&bid=${item.id}`} style={{textAlign: "center"}}>
                            {item.title}
                        </a>
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {calendarDate} | {item.author} 
                    </Typography>
                </CardContent>
            </div>
            <CardMedia
                className={classes.cover}
                image={`${URL.docs}category/${cid}/blog/img/${item.id}_0.jpg`}
                title={item.title}
            />
        </Card>
    );
  
}