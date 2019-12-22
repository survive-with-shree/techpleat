import React from 'react';
import PropTypes from 'prop-types';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Li } from '../styles/style';
import s from '../styles/exampleTwoDeepComponent.style';

const propTypes = {
  location: PropTypes.object.isRequired,
};

export default function ProductList({ location }) {
  const queryPresent = location.search !== '';

  function queryStringTitle() {
    if (queryPresent) return 'The query string field-value pairs are:';
    return 'No query string in the url';
  }

  function linkToShowQueryAndOrHash() {
    if (queryPresent) return null;

    const queryString = (queryPresent ? location.search : '?field1=foo&field2=bar');

    let linkText = '';
    if (queryPresent) linkText = 'Show with hash fragment';
    
    return (
      <div style={s.lineContainer}>
        <Interactive
          as={Link}
          to={`/category/productlist${queryString}${hashFragment}`}
          {...s.link}
        >{linkText}</Interactive>
      </div>
    );
  }

  function parseQueryString() {
    if (!queryPresent) return [];
    return location.search
      .replace('?', '')
      .split('&')
      .map(fvPair => fvPair.split('='))
      .map(pair => [pair[0], pair.slice(1).join('=')]);
  }

  return (
    <div>
      <div style={s.lineContainer}>
        <div>{queryStringTitle()}</div>
        <ul>
          {
            parseQueryString().map((pair, index) => (
              <Li key={`${pair[0]}${pair[1]}${index}`}>{`${pair[0]}: ${pair[1]}`}</Li>
            ))
          }
        </ul>
      </div>
      <div style={s.lineContainer}>
        <div>{hashFragmentTitle()}</div>
        <ul>
          {hashPresent && <Li>{location.hash.slice(1)}</Li>}
        </ul>
      </div>
      {linkToShowQueryAndOrHash()}
    </div>
  );
}

ProductList.propTypes = propTypes;
