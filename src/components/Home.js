import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Code } from '../styles/style';
import s from '../styles/home.style';

export default function Home() {
  const repoReadmeLink = text => (
    <Interactive
      as="a"
      {...s.link}
      href="https://github.com/survive-with-shree/techpleat#readme"
    >{text}</Interactive>
  );

  return (
    <div>
      <p style={s.p}>
        Checkout TeachPleat's {repoReadmeLink('GitHub repo')} for instructions to contribute and support our opensource platform.
      </p>
      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/category?id=mobile"
        >Mobile</Interactive>
      </div>
    </div>
  );
}
