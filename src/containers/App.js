import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import Home from './Home';
import Category from './Category';
import Product from './Product';
import PageNotFound from './PageNotFound';
import s from '../styles/app.style';

export default function App() {
  const repoReadmeLink = text => (
    <Interactive
      as="a"
      {...s.link}
      href="https://github.com/survive-with-shree/techpleat#readme"
    > {text} </Interactive>
  );
  return (
    <Grid container style={{paddingHorizontal: 10,  paddingVertical: 20}}>
      <Grid container item lg={12}>
        <Grid container item lg={12}>
          <Grid container item lg={12} spacing={1}>
            <Grid item lg={3} style={{textAlign: "center", fontSize: "50px", textAlign: "right"}}>
              <h1> TechPleat </h1>
            </Grid>
            <Grid container item lg={6}>
              <h3> Open source platform of reviews by crowd sourced reviewers </h3>
            </Grid>
            <Grid container item lg={3}>
              <h4> {repoReadmeLink('Contribute on GitHub')} </h4>
            </Grid>
            <Divider />
          </Grid>
        </Grid>
        
        <Grid container item lg={12}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/category" component={Category} />
            <Route path="/product" component={Product} />
            <Route component={PageNotFound} />
          </Switch>
        </Grid>

        <Grid container item lg={12}>
          <div style={s.creditLine}>
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
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}