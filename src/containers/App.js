import React from 'react';
import Interactive from 'react-interactive';
import Grid from '@material-ui/core/Grid';

import Home from './Home';
import Category from './Category';
import Blog from './Blog';
import Feed from './Feed';

import PageNotFound from './PageNotFound';
import s from '../styles/app.style';

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

  return (
    <Grid container style={s.rootContainer}>
      <Grid container item md={12}>
        <Grid container item md={12} style={s.titleBar}>
          <Grid container item md={12} spacing={1}>
            <Grid item md={3} style={s.title}>
              <h1> <a href="/">TechPleat </a></h1>
            </Grid>
            <Grid container item md={6} style={s.slogan}>
              <h3> Open source platform for customers by crowd sourced reviewers </h3>
            </Grid>
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
    </Grid>
  );
}
