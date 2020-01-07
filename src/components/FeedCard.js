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
import { FacebookProvider, Like } from 'react-facebook';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    width: '100%',
    margin: "0.05vw"
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

export default function FeedCard(props) {
    const classes = useStyles();
    const item = props.feed;
    const cid = props.categoryId;
    const displayDetails = props.displayDetails;
    const date = new Date(item.timestamp * 1000);
    const calendarDate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    return (
        <Card className={classes.card}>
            <div className={classes.details}>
                {displayDetails && 
                    <CardContent className={classes.content}>
                        <Typography component="p" variant="h5">
                            <a href={`/?cid=${cid}&fid=${item.id}`} style={{textAlign: "center"}}>
                                <b>{item.title}</b>
                            </a>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {calendarDate} 
                            <br/>
                            {item.author}
                            <div style={{marginLeft: "-30px"}}>
                                <FacebookProvider appId="620534005365040">
                                    <Like href={`https://techpleat.com/?cid=${cid}&fid=${Number.parseInt(item.id)%10}`} colorScheme="dark" layout="button_count" share width="120px" />
                                </FacebookProvider>
                            </div>
                        </Typography>
                        
                    </CardContent>
                }
                {(displayDetails == false) && 
                    <CardContent className={classes.content}>
                        <Typography component="p" variant="p">
                            <a href={`/?cid=${cid}&fid=${item.id}`} style={{textAlign: "center"}}>
                                <b>{item.title}</b>
                            </a>
                            <div style={{width: "100px", height: "20px", marginTop: "2vh"}}>
                                <FacebookProvider appId="620534005365040">
                                    <Like href={`https://techpleat.com/?cid=${cid}&fid=${Number.parseInt(item.id)%10}`} colorScheme="dark" layout="button_count" width="120px" />
                                </FacebookProvider>
                            </div>
                        </Typography>
                    </CardContent>
                }
            </div>
            <CardMedia
                className={classes.cover}
                image={`${URL.docs}category/${cid}/blog/img/${item.id}_0.jpg`}
                title={item.title}
            />

        </Card>
    );
  
}