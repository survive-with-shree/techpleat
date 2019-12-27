import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import * as URL from '../utils/url';

const useStyles = makeStyles(theme => ({
  card: {
    height: 90,
    width: "100%",
    textAlign: "center",
    marginBottom: "6px"
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


export default function Timeline(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const date = new Date(props.event.timestamp * 1000);
  const calendarDate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
  return (
    <Card className={classes.card} key={props.key}>
      <a href={props.event.link} target="_blank">
        <CardHeader
          avatar={
            <Avatar 
              alt={props.event.author}
              src={`${URL.docs}logo/${props.event.author.toLowerCase().replace(' ', '_')}.jpg`} 
              aria-label="recipe" 
              className={classes.avatar}
            />
          }
          title={props.event.title}
          subheader={`${props.event.author} - ${calendarDate}`}
        />
        </a>
    </Card>
  );
}