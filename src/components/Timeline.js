import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import * as URL from '../utils/url';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles(theme => ({
}));


export default function Timeline(props) {
  const date = new Date(props.event.timestamp * 1000);
  const calendarDate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {setOpen(true)};
  const handleClose = () => {setOpen(false)};

  return (
    <Card className={classes.card} key={props.key} >
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
        onClick={handleClickOpen}
      />
      <React.Fragment>
        <Dialog
          fullWidth={true}
          maxWidth={'xl'}
          fullScreen={true}
          open={open}
          onClose={handleClose}
          aria-labelledby="max-width-dialog-title"
          TransitionComponent={Transition}
          keepMounted
        >
          
          <div>
            <iframe
              style={{width:"100%", height:"44vw"}}
              src={`https://www.youtube.com/embed/${props.event.link.split("v=")[1]}`}
              frameBorder='0'
              allow='autoplay; encrypted-media'
              allowfullscreen> 
              </iframe>
          </div>
          <DialogActions>
            <Button variant="contained" autoFocus  color="primary" style={{width: "100%"}} onClick={() => { handleClose() }}>
              CLOSE VIDEO
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </Card>
  );
}