import React from 'react';
import Interactive from 'react-interactive';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import Home from './Home';
import Category from './Category';
import Blog from './Blog';
import Feed from './Feed';
import CategoryListing from './CategoryListing';

import s from '../styles/app.style';
import { DialogContent } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function App() {
  let cid = location.search.match("(cid=[a-z]*)")
  let pid = location.search.match("(pid=[0-9_]*)")
  let bid = location.search.match("(bid=[0-9_]*)")
  let fid = location.search.match("(fid=[0-9_]*)")

  if (cid != null) cid = cid[0].split("=")[1]
  if (pid != null) pid = pid[0].split("=")[1]
  if (bid != null) bid = bid[0].split("=")[1]
  if (fid != null) fid = fid[0].split("=")[1]
  
  const contentGenrator = (cid, pid) => {
    if (cid == null) return <Home/>
    else if (pid != null)  return <Category/>
    else if (bid != null)  return <Blog />
    else if (fid != null)  return <Feed />
  }

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {setOpen(true)};
  const handleClose = () => {setOpen(false)};

  return (
    <Grid container item style={s.rootContainer}>
      <Grid container item md={12}>
        <Grid container item md={12} style={s.titleBar}>
            <Grid item md={1} style={s.title}>
              <Button onClick={handleClickOpen}>
                <MenuIcon style={{ color: "#fff" }}/>
              </Button>
            </Grid>
    
            <Grid item md={3} style={s.title}>
              <a href="/"> <h1 style={{alignSelf: "flex-end", margin: "0px", marginLeft: "1vw"}}>TechPleat </h1> </a>
            </Grid>
            <Grid container item md={6} style={s.slogan}>
              <h3 style={{alignSelf: "flex-end", margin: "0px", marginBottom: "1vw"}}> Open source platform for customers by crowd sourced reviewers </h3>
            </Grid>
        </Grid>
        <Grid container item md={12} style={s.body}>
            {contentGenrator(cid, pid)}
        </Grid>

        <Grid container item md={12} style={s.footer}>
            <Grid item md={6} style={{textAlign: "center"}}>
              <Interactive
                as="a"
                href="https://github.com/techpleat/techpleat#readme"
                interactiveChild
                focus={{}}
                touchActive={{}}
                touchActiveTapOnly
                >
                  <span {...s.childLink}>Contribute on GitHub</span>
              </Interactive>
            </Grid>
            <Grid item md={4} style={{textAlign: "center"}}>
              <Interactive
                as="a"
                href="/"
                interactiveChild
                focus={{}}
                touchActive={{}}
                touchActiveTapOnly
                >
                  Code and concept by <span {...s.childLink}>Devendra Parhate and Shreejit Verma</span>
              </Interactive>
            </Grid>
        </Grid>
      </Grid>
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
          <DialogActions style={{width: "98%", textAlign: "right"}}>
            <IconButton
              style={{marginRight: "2vw"}}
              aria-label="close"
              component="a"
              onClick={() => {handleClose()}}>
              <CloseIcon fontSize="inherit"/>
            </IconButton>    
          </DialogActions>
          <CategoryListing/>
        </Dialog>
      </React.Fragment>
    </Grid>
  );
}
