import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
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
    >{text}</Interactive>
  );
  return (
    <div style={s.root}>
      <h1 style={s.title}>TechPleat</h1>
      <h3> Open source platform of reviews by crowd sourced reviewers </h3>
      <p style={s.p}>
        Checkout TeachPleat's {repoReadmeLink('GitHub repo')} for instructions to contribute and support our opensource platform.
      </p>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category" component={Category} />
        <Route path="/product" component={Product} />
        <Route component={PageNotFound} />
      </Switch>

      <div style={s.creditLine}>
        <Interactive
          as="a"
          href="https://techpleat.com/"
          interactiveChild
          focus={{}}
          touchActive={{}}
          touchActiveTapOnly
        >
          Code and concept by <span {...s.childLink}>Devendra Parhate and Shreejit Verma</span>
        </Interactive>
      </div>
    </div>
  );
}
