import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ExampleComponent from './ExampleComponent';
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';
import s from '../styles/app.style';

export default function App() {
  return (
    <div style={s.root}>
      <h1 style={s.title}>TechPleat</h1>
      <h3> Open source platform of reviews by crowed sourced reviewers </h3>
      <Interactive
        as="a"
        href="https://github.com/survive-with-shree/techpleat"
        style={s.repoLink}
        {...s.link}
      >https://github.com/survive-with-shree/techpleat</Interactive>

      <nav style={s.breadcrumbs}>
        <Breadcrumbs />
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/example" component={ExampleComponent} />
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
