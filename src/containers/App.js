import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import Home from './Home';
import Category from './Category';
import Product from './Product';
import PageNotFound from './PageNotFound';
import s from '../styles/app.style';

export default function App() {
  return (
    <Grid container style={s.rootContainer}>
      <Grid container item md={12}>
        <Grid container item md={12} style={s.titleBar}>
          <Grid container item md={12} spacing={1}>
            <Grid item md={3} style={s.title}>
              <h1> TechPleat </h1>
            </Grid>
            <Grid container item md={6} style={s.slogan}>
              <h3> Open source platform for reviews by crowd sourced reviewers </h3>
            </Grid>
          </Grid>
        </Grid>
        
        <Grid container item md={12} style={s.body}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/category" component={Category} />
            <Route path="/product" component={Product} />
            <Route component={PageNotFound} />
          </Switch>
        </Grid>

        <Grid container item md={12} style={s.footer}>
            <Grid item md={6} style={{textAlign: "center"}}>
                <Interactive
                as="a"
                href="https://github.com/survive-with-shree/techpleat#readme"
                interactiveChild
                focus={{}}
                touchActive={{}}
                touchActiveTapOnly
                >
                    <span {...s.childLink}>Contribute on GitHub</span>
                </Interactive>
            </Grid>
            <Grid item md={6}>
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
